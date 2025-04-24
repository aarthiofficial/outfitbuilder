import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Canvas from '@/components/Canvas';
import Controls from '@/components/Controls';

export default function Home() {
  const [outfit, setOutfit] = useState([]);

  const handleDrop = (item) => {
    setOutfit((prev) => [...prev, item]);
  };

  const handleReset = () => setOutfit([]);
  const handleSave = () => alert('Outfit saved!');
  const handleAddToCart = () => alert('Outfit added to cart!');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Outfit Builder</h1>
      <div className="flex w-full max-w-5xl">
        <Sidebar />
        <Canvas outfit={outfit} onDropItem={handleDrop} />
      </div>
      <Controls
        onReset={handleReset}
        onSave={handleSave}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
