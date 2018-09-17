import React from 'react';
import Photothumbnail from './photothumbnail.jsx';

const Photocarouselslider = ({photos, handlesMainPhotoChange}) => {
  return (
    <div>
      {photos.map((photo, index) => (
        <Photothumbnail 
          photo={photo} 
          key={index} 
          handlesMainPhotoChange={handlesMainPhotoChange}
        />
      ))}
    </div>
  )
}

export default Photocarouselslider;