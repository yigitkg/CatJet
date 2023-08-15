const CAT_API_ENDPOINT = '../../api/cat';

/**
 * Fetches a random cat image from the cat API endpoint.
 * @returns {Promise<string>} A Promise that resolves to the URL of the cat image.
 * @throws {Error} If there is an error fetching the cat image.
 */
const fetchCatImage = async () => {
  try {
    const res = await fetch(CAT_API_ENDPOINT); // Fetch the cat image from the API endpoint
    const data = await res.json(); // Parse the response data as JSON
    return data.url; // Return the URL of the cat image
  } catch (error) {
    console.error('Error fetching cat image:', error); // Log the error to the console
    throw error; // Rethrow the error
  }
};

export const CatRepository = {
  fetchCatImage,
};
