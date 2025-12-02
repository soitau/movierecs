export default function Results({ items }) {
  if (!items.length) return <p>No results yet. Try selecting a feeling!</p>;

  return (
    <div className="grid">
      {items.map((item) => (
        <div key={item.Name} className="card">
          <h3>{item.Name}</h3>
          <p>{item.Type}</p>
          {item.wTeaser && <p>{item.wTeaser}</p>}
          {item.yUrl && (
            <a href={item.yUrl} target="_blank">YouTube →</a>
          )}
        </div>
      ))}
    </div>
  );
}
