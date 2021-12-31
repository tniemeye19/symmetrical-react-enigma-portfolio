import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';

import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Navigation />
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
