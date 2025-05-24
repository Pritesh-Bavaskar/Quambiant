import React, { useState, useEffect, useRef } from 'react';
import bckImg from 'src/assets/media/landing/bck_img.png';
import loaderImg from 'src/assets/media/landing/quambiant-loader.svg';
import loaderImgMob from 'src/assets/media/landing/quambiant-loader-mob.svg';
import PropTypes from 'prop-types';

export default function IntroSection({ intro }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);
  const [stage, setStage] = useState(0); // 0: dark, 1: white, 2: background
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const videoRef = useRef(null);

  // Determine if the background should be a video
  const backgroundUrl =
    intro?.backgroundUrl ||
    (intro?.HeroImage?.url ? `${process.env.REACT_APP_HOST_API}${intro.HeroImage.url}` : '');
  const isVideo =
    intro?.backgroundType === 'video' ||
    (backgroundUrl &&
      (backgroundUrl.endsWith('.mp4') ||
        backgroundUrl.endsWith('.webm') ||
        backgroundUrl.endsWith('.ogg') ||
        intro?.HeroImage?.mime?.startsWith('video/')));

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    backgroundImage: stage === 2 && !isVideo ? `url(${backgroundUrl})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: isMobile ? '20% center' : 'center',
    transition: 'all 1s ease',
    opacity: isVisible ? 1 : 0,
    pointerEvents: 'auto',
    overflow: 'hidden',
  };

  const videoStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 'auto',
    transform: 'translate(-50%, -50%)',
    objectFit: 'cover',
    opacity: stage > 1 ? 1 : 0,
    transition: 'opacity 1s ease',
  };

  const darkOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    zIndex: 1,
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
    transition: 'all 2.5s ease',
    transform: isZoomed ? 'scale(100)' : 'scale(1)',
    transformOrigin: isMobile ? 'calc(50% + 5px) center' : 'calc(50% + 20px) center',
  };

  // Mute video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div style={containerStyle}>
      {isVideo && stage > 1 && (
        <video ref={videoRef} autoPlay loop muted playsInline style={videoStyle}>
          <source src={backgroundUrl} type={intro?.HeroImage?.mime || 'video/mp4'} />
          Your browser does not support the video tag.
        </video>
      )}
      <div style={darkOverlayStyle} />
      <div style={overlayStyle} />
      <img src={isMobile ? loaderImgMob : loaderImg} alt="Quambiant" style={loaderStyle} />
    </div>
  );
}

IntroSection.propTypes = {
  intro: PropTypes.object,
};
