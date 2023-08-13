import { useState, useEffect } from 'react';

const useCatImage = () => {
  const [catImage, setCatImage] = useState<string | null>(null);

  const fetchCatImage = async () => {
    try {
      const res = await fetch('../../api/cat');
      const data = await res.json();
      setCatImage(data.url);
    } catch (error) {
      console.error('Error fetching cat image:', error);
    }
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return { catImage, fetchCatImage };
};

export default useCatImage;
