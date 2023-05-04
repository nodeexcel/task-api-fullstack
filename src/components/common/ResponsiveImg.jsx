import React from "react";

const ResponsiveImage = ({ desktopImage, mobileImage, alt, mobileImgStyle, desktopImgStyle }) => {
  return (
    <picture>
      <source media="(max-width: 768px)" srcSet={mobileImage} style={mobileImgStyle} />
      <img src={desktopImage} alt={alt} style={desktopImgStyle} />
    </picture>
  );
};

export default ResponsiveImage;