import React, { useState, useEffect } from 'react';
import bckImg from 'src/assets/media/landing/bck_img.png';

export default function IntroSection() {
  const [isVisible, setIsVisible] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.pointerEvents = 'none';

    const zoomTimer = setTimeout(() => {
      setIsZoomed(true);
    }, 2000);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = '';
      document.body.style.pointerEvents = '';
    }, 3000);

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = '';
      document.body.style.pointerEvents = '';
    };
  }, []);

  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    zIndex: 9999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: `linear-gradient(rgba(7, 19, 23, 1), rgba(7, 19, 23, 1)), url(${bckImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'all 1s ease',
    opacity: isVisible ? 1 : 0,
    pointerEvents: 'auto',
  };

  const textStyle = {
    fontFamily: 'Playfair Display, serif',
    fontSize: '100px',
    color: 'transparent',
    WebkitTextStroke: '2px white',
    WebkitBackgroundClip: 'text',
    backgroundImage: `url(${bckImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: isZoomed ? 0 : 1,
    transition: 'opacity 1s ease, transform 1s ease',
    textAlign: 'center',
    zIndex: 10,
    lineHeight: 1,
    maxWidth: '100%',
    wordBreak: 'break-word',
    fontWeight: '900',
    transform: isZoomed ? 'scale(10)' : 'scale(1)',
  };

  if (!isVisible) return null;

  return (
    <div style={containerStyle}>
      <div style={textStyle}>Quambiant</div>
    </div>
  );
}
