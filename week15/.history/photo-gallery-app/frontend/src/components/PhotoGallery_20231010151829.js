import './styles.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PhotoGallery = () => {
  const [imageFilenames, setImageFilenames] = useState([]);

  useEffect(() => {
    const fetchImageFilenames = async () => {
      try {
        const response = await axios.get('http://localhost:4000/uploads');
        setImageFilenames(response.data); // Assuming the response is an array of filenames
      } catch (error) {
        console.error('Error fetching image filenames:', error);
      }
    };

    fetchImageFilenames();
  }, []);

  return (
    <div className='PhotoGallery'>
      <h2>Photo Gallery</h2>
      <div className="gallery">
        {imageFilenames.map((filename, index) => (
          <div key={index} className="gallery-item">
            <img src={`/uploads/${filename}`} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
