import { NextApiRequest, NextApiResponse } from 'next';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const apiKey = process.env.NEW_CAT_API_KEY;

  const headers = {
    'x-api-key': apiKey,
  } as HeadersInit;

  try {
    const catRes = await fetch('https://api.thecatapi.com/v1/images/search', {
      headers: headers,
    });
    const data = await catRes.json();
    res.status(200).json(data[0]);
  } catch (error) {
    res.status(500).json({ error: 'API isteği sırasında bir hata oluştu' });
  }
};
