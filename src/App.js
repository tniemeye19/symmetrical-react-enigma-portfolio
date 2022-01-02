import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {

  const [currentDisplay, setCurrentDisplay] = useState("About");

  const renderDisplay = () => {
    switch (currentDisplay) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume": 
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div className="App">
      <Navigation
        currentDisplay={currentDisplay}
        setCurrentDisplay={setCurrentDisplay}
      />
      <main>
        {renderDisplay(currentDisplay)}
      </main>
      <Footer />
    </div>
  );
}

export default App;