import React, { useState } from 'react';

const ImageWithFallback = ({ src, alt, fallback }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(fallback);
  };

  return <img src={imgSrc} alt={alt} onError={handleError} />;
};

export default ImageWithFallback;
