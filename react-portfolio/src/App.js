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
      if (window.innerWidth <= 1024) return; // 1024px 이하일 때 풀페이지 스크롤 비활성화

      const sections = document.querySelectorAll('.section');
      const sectionCount = sections.length;

      sections.forEach((section, index) => {
        const handleWheel = (event) => {
          event.preventDefault();
          let delta = event.deltaY || -event.detail;
          let moveTop = window.scrollY;

          if (delta > 0 && index < sectionCount - 1) {
            moveTop = window.pageYOffset + sections[index + 1].getBoundingClientRect().top;
          } else if (delta < 0 && index > 0) {
            moveTop = window.pageYOffset + sections[index - 1].getBoundingClientRect().top;
          }

          window.scrollTo({ top: moveTop, left: 0, behavior: 'smooth' });
        };

        section.addEventListener('wheel', handleWheel, { passive: false });

        // Cleanup
        return () => section.removeEventListener('wheel', handleWheel);
      });
    };

    handleFullPageScroll();

    // 해상도 변화 감지 (resize 시 다시 체크)
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
