import { useEffect, useState } from 'react'; // <--- Fixed: Added useState
import { useRecoilState } from 'recoil'; // <--- Fixed: Imported useRecoilState
import { catImageState } from '../store/catImage';
import { CatRepository } from '../repositories/CatRepository';

type UseCatImageReturn = {
  catImage: string | null;
  fetchCatImage: () => void;
  loading: boolean;
  error: Error | null;
};

/**
 * Fetches a cat image and manages the state of the image loading process.
 * @returns An object with the cat image, a function to fetch a new image,
 * the loading state, and any error that occurred during the fetch process.
 */
const useCatImage = (): UseCatImageReturn => {
  // Define the state for the cat image, loading, and error
  const [catImage, setCatImage] = useRecoilState(catImageState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  /**
   * Fetches a cat image using the CatRepository.
   * Sets the cat image URL if successful, or sets an error if unsuccessful.
   * Sets loading to false after the operation.
   */
  const fetchCatImage = async () => {
    setLoading(true);
    try {
      // Fetch the cat image URL from the CatRepository
      const imageUrl = await CatRepository.fetchCatImage();
      // Set the cat image URL
      setCatImage(imageUrl);
    } catch (err) {
      // If an error occurred, set the error state
      if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error('An unexpected error occurred.'));
      }
    } finally {
      // Set loading to false after the operation
      setLoading(false);
    }
  };

  useEffect(() => {
    /**
     * Loads the cat image when the component mounts.
     */
    const loadCatImage = async () => {
      await fetchCatImage();
    };
    loadCatImage();
  }, []);

  return { catImage, fetchCatImage, loading, error };
};

export default useCatImage;
