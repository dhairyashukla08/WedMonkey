import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import greeting from './../images/Greetings.png';
import imagepdf from './../images/imagepdf.png';
import videoimage from './../images/videoimage.png';


const Cards = () => {
  useEffect(() => {
    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (centerY - y) / 10;
      const rotateY = (x - centerX) / 10;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = (card) => {
      card.style.transform = 'rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    const handleCardMouseEnter = (card) => {
      card.style.transition = 'none';
    };

    const handleCardMouseLeave = (card) => {
      card.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
    };

    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      const mouseMoveHandler = (e) => handleMouseMove(e, card);
      const mouseLeaveHandler = () => handleMouseLeave(card);
      const mouseEnterHandler = () => handleCardMouseEnter(card);
      const mouseLeaveTransitionHandler = () => handleCardMouseLeave(card);

      card.addEventListener('mousemove', mouseMoveHandler);
      card.addEventListener('mouseleave', mouseLeaveHandler);
      card.addEventListener('mouseenter', mouseEnterHandler);
      card.addEventListener('mouseleave', mouseLeaveTransitionHandler);

      return () => {
        card.removeEventListener('mousemove', mouseMoveHandler);
        card.removeEventListener('mouseleave', mouseLeaveHandler);
        card.removeEventListener('mouseenter', mouseEnterHandler);
        card.removeEventListener('mouseleave', mouseLeaveTransitionHandler);
      };
    });
  }, []);

  return (
    <div className="expertise-section">
      <h1 className="expertise-heading">Our Expertise</h1>
      <div className="cards">
        <div className="card-container">
          <div className="card">
            <div className="card-content">
              <img src={videoimage} alt="Wedding Video" width="350" height="300" />
              <div>
                <h2>Wedding Video</h2>
                <p>We provide an invitation through video</p>
                <Button className="button">Try now →</Button>
              </div>
            </div>
            <div className="glow"></div>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <div className="card-content">
              <img src={imagepdf} alt="Wedding PDF" width="350" height="300" />
              <div>
                <h2>Wedding PDF</h2>
                <p>We provide an invitation through PDF</p>
                <Button className="button">Try now →</Button>
              </div>
            </div>
            <div className="glow"></div>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <div className="card-content">
              <img src={greeting} alt="Greetings" width="350" height="300" />
              <div>
                <h2>Greetings</h2>
                <p>We provide greeting cards for special occasions</p>
                <Button className="button">Try now →</Button>
              </div>
            </div>
            <div className="glow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
