import React from 'react';

const Photothumbnail = ({photo, index}) => {
  return (
    <img 
      className="thumbnail" 
      src={photo.url}
      index={index}   
    ></img>
  )
}

export default Photothumbnail;