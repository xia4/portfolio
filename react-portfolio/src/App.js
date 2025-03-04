import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
    useEffect(() => {
        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'all 0.6s ease-out';
        });

        const revealSection = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        };

        const sectionObserver = new IntersectionObserver(revealSection, {
            threshold: 0.1
        });

        sections.forEach((section) => {
            sectionObserver.observe(section);
        });
    }, []);

    return (
        <div className="App">
            <Header />
            <section id="hero">Hero Section</section>
            <section id="about">About Me</section>
        </div>
    );
}

export default App;
