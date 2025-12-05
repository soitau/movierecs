// src/results.jsx


const IMAGE_BASE = "https://image.tmdb.org/t/p/w300";


function Results({ items, emotion }) {
 if (!items || items.length === 0) {
   return (
     <div style={{ marginTop: "1.5rem" }}>
       <p>No results yet. Try searching for a movie.</p>
     </div>
   );
 }


 return (
   <div style={{ marginTop: "1.5rem", textAlign: "left" }}>
     <h2>
       Recommendations
       {emotion && (
         <>
           {" "}
           for when you feel <em>{emotion}</em>
         </>
       )}
     </h2>


     <div
       style={{
         marginTop: "1rem",
         display: "grid",
         gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
         gap: "1rem",
       }}
     >
       {items.map((movie) => (
         <div
           key={movie.id}
           style={{
             padding: "0.75rem 1rem",
             borderRadius: "12px",
             border: "1px solid #333",
             background: "#111",
             color: "white",
           }}
         >
           {movie.poster_path && (
             <img
               src={IMAGE_BASE + movie.poster_path}
               alt={movie.title}
               style={{
                 width: "100%",
                 borderRadius: "8px",
                 marginBottom: "0.5rem",
               }}
             />
           )}
           <strong>{movie.title}</strong>
           {movie.release_date && (
             <span style={{ opacity: 0.7 }}> ({movie.release_date.slice(0, 4)})</span>
           )}
           {movie.overview && (
             <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", opacity: 0.8 }}>
               {movie.overview}
             </p>
           )}
         </div>
       ))}
     </div>
   </div>
 );
}


export default Results;