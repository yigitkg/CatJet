import { NextApiRequest, NextApiResponse } from 'next';

/**
 * Handler function for retrieving a random cat gif.
 *
 * This function interfaces with thecatapi.com to retrieve a random
 * cat gif when called. It requires an API key which is read from
 * the environment variables. The function responds with the cat gif
 * data or an error message in case of failure.
 *
 * @param _req - The incoming Next.js API request.
 * @param res - The outgoing Next.js API response.
 */
export default async (_req: NextApiRequest, res: NextApiResponse) => {
  // Retrieve the API key from the environment variables.
  const apiKey = process.env.NEW_CAT_API_KEY;

  // Define headers for the fetch request. It's important to include the API key.
  const headers = {
    'x-api-key': apiKey,
  } as HeadersInit;

  try {
    // Make a request to thecatapi.com to get a random cat gif.
    const catRes = await fetch(
      'https://api.thecatapi.com/v1/images/search?mime_types=gif&limit=1',
      {
        headers: headers,
      }
    );

    // Parse the response data from thecatapi.com.
    const data = await catRes.json();

    // Return the cat gif data as a response.
    res.status(200).json(data[0]);
  } catch (error) {
    // If there's an error, return a 500 Internal Server Error status with a message.
    res.status(500).json({ error: 'Internal server error' });
  }
};
