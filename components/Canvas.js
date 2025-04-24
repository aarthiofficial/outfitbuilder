export default function Canvas({ outfit, onDropItem }) {
  const handleDrop = (e) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData('item'));
    onDropItem(data);
  };

  const handleDragOver = (e) => e.preventDefault();

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="w-3/4 h-[400px] flex flex-wrap justify-center items-center border mx-4 rounded-md bg-gray-100"
    >
      {outfit.map((item, idx) => (
        <img
          key={idx}
          src={item.icon}
          alt={item.label}
          title={item.label}
          className="w-16 h-16 m-2"
        />
      ))}
    </div>
  );
}
