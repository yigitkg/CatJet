import useCatImage from '@/hooks/useCatImage';
import { FC } from 'react';

const CatDisplay: FC = () => {
  const { catImage, fetchCatImage } = useCatImage();

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
        Change the Image
      </button>
    </main>
  );
};

export default CatDisplay;
