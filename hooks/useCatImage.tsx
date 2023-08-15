import { useEffect, useState } from 'react';
import { CatRepository } from '../repositories/CatRepository';

// This custom hook fetches a random cat image and manages the loading and error states
/**
 * Fetches a random cat image.
 * @returns An object containing the cat image URL, a function to fetch a new cat image,
 * the loading state, and the error state.
 */
const useCatImage = () => {
  const [catImage, setCatImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  /**
   * Fetches a new cat image and updates the state accordingly.
   */
  const fetchCatImage = async () => {
    setLoading(true);
    try {
      const imageUrl = await CatRepository.fetchCatImage(); // Fetch a new cat image URL
      setCatImage(imageUrl);
    } catch (err) {
      if (err instanceof Error) {
        setError(err); // Set the error state to the caught error
      } else {
        setError(new Error('An unexpected error occurred.')); // Set a generic error message
      }
    } finally {
      setLoading(false); // Set loading state to false regardless of success or failure
    }
  };

  useEffect(() => {
    fetchCatImage(); // Fetch a cat image when the component mounts
  }, []);

  return { catImage, fetchCatImage, loading, error }; // Return the cat image URL, fetch function, loading state, and error state
};

export default useCatImage;
