import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

// Import your actual images
import image1 from '../assets/images/1.png';
import image2 from '../assets/images/2.png';
import image3 from '../assets/images/3.png';
import image4 from '../assets/images/4.png';

const carouselItems = [
  {
    id: 1,
    image: image1,
    title: ""
  },
  {
    id: 2,
    image: image2,
    title: ""
  },
  {
    id: 3,
    image: image3,
    title: ""
  },
  {
    id: 4,
    image: image4,
    title: ""
  }
];

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleItemClick = (itemId) => {
    console.log(`Clicked on item ${itemId}`);
    // You can add routing logic here later
    // Example: 
    // if (itemId === 1) navigate('/baby-registry');
    // if (itemId === 2) navigate('/product-recommendations');
    // if (itemId === 3) navigate('/tips-tricks');
    // if (itemId === 4) navigate('/join-now');
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  return (
    <div className="carousel-container">
      <div 
        className="carousel-wrapper"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {carouselItems.map((item) => (
            <div
              key={item.id}
              className="carousel-slide"
              onClick={() => handleItemClick(item.id)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="carousel-image"
              />
              <div className="slide-overlay">
                <div className="slide-content">
                  {item.title.split('\n').map((line, index) => (
                    <p key={index} className="slide-text">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className="carousel-arrow carousel-arrow-prev" onClick={prevSlide}>
          ‹
        </button>
        <button className="carousel-arrow carousel-arrow-next" onClick={nextSlide}>
          ›
        </button>

        {/* Indicators */}
        <div className="carousel-indicators">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;