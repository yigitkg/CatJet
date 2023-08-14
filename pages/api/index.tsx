import useCatImage from '@/hooks/useCatImage';
import { FC, useState, useEffect } from 'react';

const CatDisplay: FC = () => {
  const { catImage, fetchCatImage } = useCatImage();
  const [opacityClass, setOpacityClass] = useState('opacity-0');

  useEffect(() => {
    setOpacityClass('opacity-0');
    const timer = setTimeout(() => {
      setOpacityClass('opacity-100');
    }, 1300);
    return () => clearTimeout(timer);
  }, [catImage]);

  return (
    <main className="flex flex-col items-center p-4">
      {catImage && (
        <div className="relative w-[66.67vw] h-[66.67vh] rounded shadow">
          <img
            src={catImage}
            alt="Random Cat"
            className={`transition-opacity duration-1000 ${opacityClass} absolute top-0 left-0 w-full h-full rounded`}
            style={{ objectFit: 'contain' }}
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
