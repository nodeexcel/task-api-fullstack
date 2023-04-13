import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="/assets/images/home/team1.svg" onDragStart={handleDragStart} role="presentation" />,
  <img src="/assets/images/home/team2.svg" onDragStart={handleDragStart} role="presentation" />,
  <img src="/assets/images/home/team3.svg" onDragStart={handleDragStart} role="presentation" />,
];

const Gallery = () => {
  return (
    <AliceCarousel mouseTracking items={items} />
  );
}

export default Gallery