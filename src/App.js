import './App.css';
import Navigation from './components/Navigation';
// import About from './components/About';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Navigation />
      <main>
        {/* <About />
        <Portfolio />
        <Contact /> */}
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;