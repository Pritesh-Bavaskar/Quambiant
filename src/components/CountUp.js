import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const CountUp = ({ end, suffix = '', label, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();

  useEffect(() => {
    let observer;
    let animationFrame;
    let startTimestamp;

    const animateCount = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    const handleIntersect = (entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        animationFrame = requestAnimationFrame(animateCount);
        observer.disconnect();
      }
    };

    observer = new window.IntersectionObserver(handleIntersect, {
      threshold: 0.3,
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (observer && observer.disconnect) observer.disconnect();
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
    // eslint-disable-next-line
  }, [end, duration, hasAnimated]);

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1rem',
        borderRight: '1px solid #e0e0e0',
        minWidth: 180,
        background: 'transparent',
      }}
    >
      <span
        style={{
          fontSize: '3rem',
          fontWeight: 500,
          color: '#8B6A4A',
          lineHeight: 1,
        }}
      >
        {count}
        <span style={{ fontSize: '1.5rem', color: '#8B6A4A', marginLeft: 2 }}>{suffix}</span>
      </span>
      <span style={{ fontSize: '1rem', color: '#6d6d6d', marginTop: 8, textAlign: 'center' }}>
        {label}
      </span>
    </div>
  );
};

CountUp.propTypes = {
  end: PropTypes.number.isRequired,
  suffix: PropTypes.string,
  label: PropTypes.string.isRequired,
  duration: PropTypes.number,
};

export default CountUp;
