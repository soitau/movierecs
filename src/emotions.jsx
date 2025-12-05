const EMOTIONS = ["Happy", "Comfort", "Heartbroken", "Motivated", "Chill"];


function EmotionButtons({ onEmotionClick }) {
 return (
   <div style={{ marginTop: "1rem" }}>
     {EMOTIONS.map((emotion) => (
       <button
         key={emotion}
         onClick={() => onEmotionClick(emotion)}
         style={{
           margin: "0.25rem",
           padding: "8px 14px",
           borderRadius: "999px",
           border: "none",
           background: "#111",
           color: "white",
           cursor: "pointer",
         }}
       >
         {emotion}
       </button>
     ))}
   </div>
 );
}


export default EmotionButtons;



