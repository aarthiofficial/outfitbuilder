export default function ClothingItem({ item, onClick, draggable = false }) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('item', JSON.stringify(item));
  };

  return (
    <img
      src={item.icon}
      alt={item.label}
      title={item.label}
      draggable={draggable}
      onDragStart={handleDragStart}
      onClick={onClick}
      className="w-12 h-12 mb-2 cursor-pointer"
    />
  );
}
