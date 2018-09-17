import React from 'react';
import Photothumbnail from './photothumbnail.jsx';

const Photocarouselslider = ({photos}) => {
  console.log(photos)
  return (
    <div>
      {photos.map((photo, index) => (
        <Photothumbnail 
          photo={photo} 
          key={index} 
        />
      ))}
    </div>
  )
}

export default Photocarouselslider;