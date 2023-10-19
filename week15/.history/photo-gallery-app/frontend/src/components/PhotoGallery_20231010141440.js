import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PhotoGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
  const fetchImages = async () => {
    try {
      const response = await axios.get('http://localhost:4000/');
      console.log('Fetched images:', response.data); // Check if the images are being fetched correctly
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  fetchImages();
}, []);


  return (
    <div>
      <h2>Photo Gallery</h2>
      <div className="gallery">
        {images.map((imageUrl, index) => (
          <div key={index} className="gallery-item">
            <image src={`http://localhost:4000/${imageUrl}`} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
