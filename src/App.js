import React from 'react'
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Pictures from "./pages/Pictures";
import CV from "./pages/CV";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact"
import './App.css';


export default function App() {
  return (
    <Router>
    <div className="site-container">
      <header className="site-header">
        <Menu/>
      </header>
      <main className="site-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/cv" element={<CV/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/pictures" element={<Pictures/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </main>
      <footer className="site-footer">
        <Footer/>
      </footer>
    </div>
    </Router>
  );
}