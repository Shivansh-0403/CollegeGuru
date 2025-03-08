import './App.css'
import Footer from './components/Footer.tsx';
import Hero from './components/Hero.tsx';
import Navbar from './components/Navbar.tsx'
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero></Hero>
      <Footer />
    </Router>
  )
}

export default App
