import React from "react";
import { useLocation } from "react-router-dom";
const DisplayImage = () => {
  const location = useLocation();
  const imageUrl = location.state.imageUrl;

  return (
    <div>
      <img src={imageUrl} alt="Image" />
    </div>
  );
};

export default DisplayImage;
