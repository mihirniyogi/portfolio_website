import './App.scss';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
