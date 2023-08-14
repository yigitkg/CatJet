import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { catImageState } from '@/store/catImage';

const useCatImage = () => {
  const [catImage, setCatImage] = useRecoilState(catImageState);

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
