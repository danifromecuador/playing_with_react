import React from 'react';
import './App.css'

export const App = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="app">
      <nav>
        <button onClick={() => scrollToSection('home')}>Home</button>
        <button onClick={() => scrollToSection('about')}>About</button>
        <button onClick={() => scrollToSection('contact')}>Contact</button>
      </nav>

      <div className="left">


        <div id="home">
          <h2>Home Section</h2>
          <p>This is the home section of the page.</p>
        </div>

        <div id="about">
          <h2>About Section</h2>
          <p>This is the about section of the page.</p>
        </div>

        <div id="contact">
          <h2>Contact Section</h2>
          <p>This is the contact section of the page.</p>
        </div>
      </div>
    </div>
  );
};
