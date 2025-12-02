// emotions.jsx
export default function EmotionButtons({ onEmotionClick }) {
  return (
    <div className="buttons">
      <button onClick={() => onEmotionClick("happy")}>😊 Happy</button>
      <button onClick={() => onEmotionClick("sad")}>😢 Sad</button>
      <button onClick={() => onEmotionClick("excited")}>✨ Excited</button>
      <button onClick={() => onEmotionClick("scared")}>😱 Scared</button>
      <button onClick={() => onEmotionClick("romantic")}>💗 Romantic</button>
      <button onClick={() => onEmotionClick("funny")}>🤣 Funny</button>
      <button onClick={() => onEmotionClick("thoughtful")}>🤔 Thoughtful</button>
    </div>
  );
}
