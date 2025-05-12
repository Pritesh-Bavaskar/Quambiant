import React, { useState, useEffect } from 'react';
import bckImg from 'src/assets/media/landing/bck_img.png';
import loaderImg from 'src/assets/media/landing/quambiant-loader.svg';

export default function IntroSection() {
  const [isVisible, setIsVisible] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);
  const [stage, setStage] = useState(0); // 0: dark, 1: white, 2: background

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.pointerEvents = 'none';

    // Show white background after 0.5 seconds
    const whiteTimer = setTimeout(() => {
      setStage(1);
    }, 500);

    // Show background image after 1.5 seconds
    const showBgTimer = setTimeout(() => {
      setStage(2);
    }, 1500);

    const zoomTimer = setTimeout(() => {
      setIsZoomed(true);
    }, 2500);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = '';
      document.body.style.pointerEvents = '';
    }, 3500);

    return () => {
      clearTimeout(whiteTimer);
      clearTimeout(showBgTimer);
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
    backgroundColor: '#071317',
    backgroundImage: stage === 2 ? `url(${bckImg})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'all 1s ease',
    opacity: isVisible ? 1 : 0,
    pointerEvents: 'auto',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: stage === 1 ? '#ffffff' : '#071317',
    opacity: stage > 1 ? 0 : 1,
    transition: 'all 1s ease',
    zIndex: 1,
  };

  const loaderStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
    opacity: isZoomed ? 1 : 1,
    transition: 'all 1s ease',
    transform: isZoomed ? 'scale(100)' : 'scale(1)',
  };

  if (!isVisible) return null;

  return (
    <div style={containerStyle}>
      <div style={overlayStyle} />
      <img src={loaderImg} alt="Quambiant" style={loaderStyle} />
    </div>
  );
}
