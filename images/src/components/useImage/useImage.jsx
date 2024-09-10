import { useState, useEffect } from 'react';

export const useImage = () => {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      try {
        const imageModules = import.meta.glob('/src/assets/images/*.{png,jpg,jpeg,gif}');
        const imagePaths = Object.keys(imageModules).map((path) => imageModules[path]().then((module) => module.default));
        Promise.all(imagePaths).then((paths) => setImages(paths));
      } catch (error) {
        console.error('Error loading images:', error);
        setError('Failed to load images');
      }
    }, []);
  
    return { images, error };
  };
  