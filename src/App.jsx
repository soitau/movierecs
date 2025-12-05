import { useState } from "react";
import EmotionButtons from "./emotions.jsx";
import Results from "./results.jsx";
import "./App.css";

const TMDB_API_KEY = "c4898894a854db3a5b749e10f58aacb1";


function App() {
 const [selectedEmotion, setSelectedEmotion] = useState("");
 const [titleInput, setTitleInput] = useState("");
 const [results, setResults] = useState([]);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState("");


 const fetchMovies = async () => {
   if (!titleInput.trim()) return;


   setLoading(true);
   setError("");
   setResults([]);


   try {
     const query = titleInput.trim();


     const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(
       query
     )}`;


     const searchRes = await fetch(searchUrl);
     if (!searchRes.ok) {
       throw new Error(`Search error: ${searchRes.status}`);
     }


     const searchData = await searchRes.json();


     if (!searchData.results || searchData.results.length === 0) {
       setError("No movie found with that title.");
       return;
     }


     const movie = searchData.results[0];
     const movieId = movie.id;


    // 2. Fetch similar movies
     const similarUrl = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${TMDB_API_KEY}&language=en-US&page=1`;


     const similarRes = await fetch(similarUrl);
     if (!similarRes.ok) {
       throw new Error(`Similar error: ${similarRes.status}`);
     }


     const similarData = await similarRes.json();


     if (!similarData.results || similarData.results.length === 0) {
       setError("No similar movies found for that title.");
       return;
     }


     setResults(similarData.results);
   } catch (err) {
     console.error("Error fetching from TMDB:", err);
     setError(err.message || "Something went wrong fetching data.");
   } finally {
     setLoading(false);
   }
 };


 return (
   <div className="app">
     <h1>MoodFlix🎬</h1>


     <p>
       How are you feeling today?{" "}
       <strong>{selectedEmotion || "Choose a feeling below"}</strong>
     </p>


     <EmotionButtons onEmotionClick={setSelectedEmotion} />


     <div style={{ marginTop: "1rem" }}>
       <input
         type="text"
         placeholder="type a movie that matches your mood..."
         value={titleInput}
         onChange={(e) => setTitleInput(e.target.value)}
         style={{ padding: "10px", width: "300px" }}
       />
       <button
         onClick={fetchMovies}
         style={{ marginLeft: "1rem", padding: "10px 16px" }}
       >
         Find Similar Titles
       </button>
     </div>


     {loading && (
       <p style={{ marginTop: "1rem" }}>Loading recommendations...</p>
     )}
     {error && (
       <p style={{ marginTop: "1rem", color: "#ff8080" }}>{error}</p>
     )}


     <Results items={results} emotion={selectedEmotion} />
   </div>
 );
}


export default App;

