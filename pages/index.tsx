// pages/index.tsx

import { useState, useEffect } from 'react';

export default function Home() {
  const [catImage, setCatImage] = useState(null);

  useEffect(() => {
    fetchCatImage();
  }, []);

  const fetchCatImage = async () => {
    try {
      const res = await fetch('/api/cat');
      const data = await res.json();
      setCatImage(data[0].url);
    } catch (error) {
      console.error('Error fetching cat image:', error);
    }
  };

  return (
    <main className="overflow-hidden flex flex-col justify-center items-center bg-gray-100 h-screen">
      {catImage && (
        <img
          src={catImage}
          alt="Random Cat"
          className="mb-4 w-64 h-64 object-cover rounded shadow"
        />
      )}
      <button
        onClick={fetchCatImage}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Değiştir
      </button>
    </main>
  );
}
