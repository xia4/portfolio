import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import PageLoadAnimation from './components/PageLoad';
import About from './pages/About';
import Home from './pages/Home';
import Work from './pages/Work';
import ScrollToTopButton from './components/TopBtn';

function App() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    if (!isPageLoaded) return;
  }, [isPageLoaded]);

  const onComplete = () => {
    setIsPageLoaded(true);
  };

  useEffect(() => {
    const handleFullPageScroll = () => {
      if (window.innerWidth <= 1024) return;

      const sections = document.querySelectorAll('.section');
      const sectionCount = sections.length;
      let targetX = 0;
      let currentX = 0;
      let animationFrame;
      const paddingOffset = 150;

      sections.forEach((section, index) => {
        const handleWheel = (event) => {
          event.preventDefault();
          let delta = event.deltaY || -event.detail;
          let moveTop = window.scrollY;

          if (section.id === 'about') {
            const aboutWrapper = section.querySelector('#about section');

            if (aboutWrapper) {
              const totalScrollWidth = aboutWrapper.scrollWidth - aboutWrapper.clientWidth;

              targetX += delta;
              targetX = Math.max(0, Math.min(targetX, totalScrollWidth));

              cancelAnimationFrame(animationFrame);
              const smoothScroll = () => {
                currentX += (targetX - currentX) * 0.1;
                aboutWrapper.style.transform = `translateX(-${currentX + paddingOffset}px)`;
                aboutWrapper.dataset.scrollX = currentX;

                if (Math.abs(targetX - currentX) > 0.5) {
                  animationFrame = requestAnimationFrame(smoothScroll);
                }
              };
              smoothScroll();

              if (delta > 0 && targetX >= totalScrollWidth - 10 && index < sectionCount - 1) {
                setTimeout(() => {
                  moveTop = window.pageYOffset + sections[index + 1].getBoundingClientRect().top;
                  window.scrollTo({ top: moveTop, left: 0, behavior: 'smooth' });
                  if (sections[index + 1].id === 'work') {
                    document.body.classList.add('work');
                  }
                }, 300);
              }

              if (delta < 0 && targetX <= 10 && index > 0) {
                setTimeout(() => {
                  moveTop = window.pageYOffset + sections[index - 1].getBoundingClientRect().top;
                  window.scrollTo({ top: moveTop, left: 0, behavior: 'smooth' });
                  document.body.classList.remove('work');
                }, 300);
              }
              return;
            }
          }

          if (delta > 0 && index < sectionCount - 1) {
            moveTop = window.pageYOffset + sections[index + 1].getBoundingClientRect().top;
            if (sections[index + 1].id === 'work') {
              document.body.classList.add('work');
            }
          } else if (delta < 0 && index > 0) {
            moveTop = window.pageYOffset + sections[index - 1].getBoundingClientRect().top;
            if (sections[index - 1].id !== 'work') {
              document.body.classList.remove('work');
            }
          }

          window.scrollTo({ top: moveTop, left: 0, behavior: 'smooth' });
        };

        section.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
          section.removeEventListener('wheel', handleWheel);
          cancelAnimationFrame(animationFrame);
          document.body.classList.remove('work');
        };
      });
    };

    handleFullPageScroll();

    window.addEventListener('resize', handleFullPageScroll);

    return () => window.removeEventListener('resize', handleFullPageScroll);
  }, []);

  return (
    <div className="App">
      <PageLoadAnimation onComplete={onComplete} />
      <Header />
      <div className="wrap">
        <Home />
        <About />
        <Work />
      </div>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
