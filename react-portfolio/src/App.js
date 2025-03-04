import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import PageLoadAnimation from './components/PageLoad';

function App() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

    useEffect(() => {
      if (!isPageLoaded) return;
    }, [isPageLoaded]);

    return (
       <div className="App">
            <PageLoadAnimation onComplete={() => setIsPageLoaded(true)} />
            <Header />
            <section id="hero">Hero Section</section>
            <section id="about">About Me</section>
        </div>
    );
}

export default App;
