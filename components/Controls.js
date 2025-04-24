export default function Controls({ onReset, onSave, onAddToCart }) {
  return (
    <div className="flex space-x-4 mt-4">
      <button onClick={onReset} className="px-4 py-2 border rounded-md">Reset</button>
      <button onClick={onSave} className="px-4 py-2 border rounded-md">Save Outfit</button>
      <button onClick={onAddToCart} className="px-4 py-2 border rounded-md">Add to Cart 🛒</button>
    </div>
  );
}
