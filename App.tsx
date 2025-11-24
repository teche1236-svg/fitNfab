import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Workshop } from './pages/Workshop';
import { Gallery } from './pages/Gallery';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F9F9FB] font-sans selection:bg-vitrus-lime selection:text-vitrus-dark">
        <Routes>
          {/* Routes with Navbar and Footer */}
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          } />
          
          <Route path="/about" element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          } />
          
          <Route path="/workshop" element={
            <>
              <Navbar />
              <Workshop />
              <Footer />
            </>
          } />
          
          <Route path="/gallery" element={
            <>
              <Navbar />
              <Gallery />
              <Footer />
            </>
          } />
          
          {/* Auth routes without Navbar/Footer */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;