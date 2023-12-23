export default function Count({ id, initialValue, onIncrementClick }) {
  const handleIncrementClick = (e) => {
    e.preventDefault();
    onIncrementClick(e.target.id);
  };

  return (
    <div className="Count">
      <h4>Count: {initialValue}</h4>
      <button id={id} onClick={handleIncrementClick} className="Increment">
        Increment
      </button>
    </div>
  );
}
