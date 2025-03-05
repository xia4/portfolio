import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const TopBtn = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 1000;
  transition: background-color 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s ease, transform 0.3s ease;

  &.show {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    background-color: #0056b3;
  }
`

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <TopBtn
          onClick={scrollToTop}
          className={`scroll-to-top-btn ${isVisible ? 'show' : ''}`}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </TopBtn>
      )}
    </>
  );
};

export default ScrollToTopButton;
