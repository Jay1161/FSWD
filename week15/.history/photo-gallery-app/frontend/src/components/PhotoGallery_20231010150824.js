import './styles.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PhotoGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:4000/uploads'); // Change this to fetch image filenames
        const imageFilenames = response.data; // Assuming the response is an array of filenames
        const imageUrls = imageFilenames.map((filename) => `/uploads/${filename}`);
        setImages(imageUrls);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className='PhotoGallery'>
      <h2>Photo Gallery</h2>
      <div className="gallery">
        {images.map((imageUrl, index) => (
          <div key={index} className="gallery-item">
            <img src={imageUrl} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;