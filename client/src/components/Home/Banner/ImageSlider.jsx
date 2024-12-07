import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import daisy from "./../../../assets/Daisy2.jpg"
import aa from "./../../../assets/ff.jpg"
import a from "./../../../assets/qq.jpg"
import "./ImageSlider.scss";


const ImageSlider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const navigate = useNavigate();

    const handleShopNowClick = () => {
        navigate("/all");
    };
  const slideInterval = 5000;
  const slides = [
    { src: daisy, alt: 'Slide 1' },
    { src: aa, alt: 'Slide 2' },
    { src: a, alt: 'Slide 3' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, slideInterval);

    return () => clearInterval(timer);
  }, [slides.length, slideInterval]);

  const handleSlideChange = (newIndex) => {
    setSlideIndex(newIndex);
  };

  const contents = [
    {
      heading: 'Heading',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod nisi id ligula tempus, id consequat turpis imperdiet. Nullam nec est non est lacinia venenatis. Nulla convallis nulla id odio eleifend elementum.',
      linkText: 'Read More',
      linkHref: '#',
    },
    {
      heading: 'Heading',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod nisi id ligula tempus, id consequat turpis imperdiet. Nullam nec est non est lacinia venenatis. Nulla convallis nulla id odio eleifend elementum.',
      linkText: 'Read More',
      linkHref: '#',
    },
    {
      heading: 'Heading',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod nisi id ligula tempus, id consequat turpis imperdiet. Nullam nec est non est lacinia venenatis. Nulla convallis nulla id odio eleifend elementum.',
      linkText: 'Read More',
      linkHref: '#',
    },
    
  ];

  return (
    <div className="landing-page">
      <header className="iheader">
        <button type="button" className="menu-btn" onClick={() => handleSlideChange(0)}>
          <i className="fas fa-bars"></i>
        </button>
      </header>

      <section className="home">
        {slides.map((slide, index) => (
          <img
            key={index}
            className={`img-slide ${slideIndex === index ? 'active' : ''}`}
            src={slide.src}
            alt={slide.alt}
          />
        ))}

        {contents.map((content, index) => (
          <div
            key={index}
            className={`content ${slideIndex === index ? 'active' : ''}`}
          >
            <h1>{content.heading}</h1>
            <p>{content.text}</p>

            <div className="bcontent">
                <div className="btext">
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta" onClick={handleShopNowClick}>Shop Now</div>
                    </div>
                </div>

            </div>

          </div>
        ))}

        <div className="media-icons">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        <div className="slider-navigation">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`nav-btn ${slideIndex === index ? 'active' : ''}`}
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ImageSlider