import useCatImage from '@/hooks/useCatImage';
import { FC, useState, useEffect } from 'react';

/**
 * Display a random cat image and allow the user to change it.
 */
const CatDisplay: FC = () => {
  // Fetch a new cat image and manage loading state
  const { catImage, fetchCatImage } = useCatImage();

  // Manage opacity animation and loading state
  const [opacityClass, setOpacityClass] = useState('opacity-0');
  const [loading, setLoading] = useState(false);

  /**
   * Handle the change of the cat image.
   * - Fade out the current image
   * - Fetch a new image
   * - Wait for the fade out animation to complete
   * - Fade in the new image after fetching
   */
  const handleImageChange = async () => {
    // Start by fading out the current image
    setOpacityClass('opacity-0');
    setLoading(true);
    // Fetch the new image
    await fetchCatImage();
    console.log('fetchCatImage');

    // Wait for the fade out animation to complete
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Fade in the new image after fetching
    setOpacityClass('opacity-100');
    setLoading(false);
  };

  /**
   * Update the opacity class when the cat image or loading state changes.
   * This ensures that the image is visible when loading is complete.
   */
  useEffect(() => {
    if (!loading) {
      setOpacityClass('opacity-100');
    }
  }, [catImage, loading]);

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
        onClick={handleImageChange}
        className="mt-4 w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Change the Image
      </button>
    </main>
  );
};

export default CatDisplay;
