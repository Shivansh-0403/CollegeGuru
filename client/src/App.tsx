import './App.css'
import Footer from './components/Footer.tsx';
// import Hero from './components/Hero.tsx';
import Navbar from './components/Navbar.tsx'
import { BrowserRouter as Router } from "react-router-dom";
import Home from './pages/Home.tsx';
import Pyqs from './pages/Pyqs.tsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Home></Home>
      <Pyqs></Pyqs>
      <Footer />
    </Router>
  )
}

export default App
