import useCatImage from '@/hooks/useCatImage';
import { FC } from 'react';

const CatDisplay: FC = () => {
  const { catImage, fetchCatImage } = useCatImage();

  return (
    <main className="flex flex-col items-center p-4">
      {catImage && (
        <div className="relative w-3/4 h-3/4 sm:w-1/2 sm:h-1/2 lg:w-1/2 lg:h-1/2 xl:w-2/3 xl:h-2/3 2xl:w-3/4 2xl:h-3/4 rounded shadow mb-4 overflow-hidden">
          <img
            src={catImage}
            alt="Random Cat"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <button
        onClick={fetchCatImage}
        className="mt-4 w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Change the Image
      </button>
    </main>
  );
};

export default CatDisplay;
