import { useState } from 'react';
import EmotionButtons from './emotions.jsx';
import Results from './results.jsx';
import './style.css';

const API_KEY = '1063071-Applicat-B777DFAE'; // Replace with your actual TasteDive key if needed

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [customEmotion, setCustomEmotion] = useState('');

  const fetchMovies = async (emotion) => {
    if (!emotion) return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.allorigins.win/raw?url=${encodeURIComponent(
          `https://tastedive.com/api/similar?q=${emotion}&type=movies&limit=10&k=${API_KEY}`
        )}`
      );
      const data = await response.json();
      console.log("TasteDive response:", data); // ✅ Debug output

      if (data?.Similar?.Results?.length) {
        setResults(data.Similar.Results);
      } else {
        setResults([]);
        console.warn("No results found for:", emotion);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Emotion-Based Movie Finder 🎬</h1>

      {/* Emotion buttons */}
      <EmotionButtons onEmotionClick={fetchMovies} />

      {/* Text input for custom emotions */}
      <div style={{ marginTop: '1rem' }}>
        <input
          type="text"
          placeholder="Or type your own feeling..."
          value={customEmotion}
          onChange={(e) => setCustomEmotion(e.target.value)}
          style={{ padding: '10px', width: '300px' }}
        />
        <button
          onClick={() => fetchMovies(customEmotion)}
          style={{ marginLeft: '1rem', padding: '10px 16px' }}
        >
          Find Movies
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {/* Results display */}
      <Results items={results} />
    </div>
  );
}

export default App;


