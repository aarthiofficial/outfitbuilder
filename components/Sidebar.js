import ClothingItem from './ClothingItem';

const items = [
  { id: 'tshirt', label: 'T-Shirt', icon: '/assets/tshirt.png' },
  { id: 'pants', label: 'Pants', icon: '/assets/pants.png' },
  { id: 'jacket', label: 'Jacket', icon: '/assets/jacket.png' },
  { id: 'dress', label: 'Dress', icon: '/assets/dress.png' },
  { id: 'cap', label: 'Cap', icon: '/assets/cap.png' },
  { id: 'shoes', label: 'Shoes', icon: '/assets/shoes.png' }
];

export default function Sidebar() {
  return (
    <div className="w-1/4 p-4 border rounded-md">
      {items.map((item) => (
        <ClothingItem key={item.id} item={item} draggable />
      ))}
    </div>
  );
}
