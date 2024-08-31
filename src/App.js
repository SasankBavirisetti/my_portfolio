import './App.css';
import { About } from './Components/About/About';
import { Experience } from './Components/Experience/Experience';
import { Footer } from './Components/Footer/Footer';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Projects } from './Components/Projects/Projects';
import { Certifications } from './Components/Certifications/Certifications';
import { Contact } from './Components/Contact/Contact';
import { Skills } from './Components/Skills/Skills';
import { useEffect, useState } from 'react';

function App() {



  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className='main-content'>
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/about' element={<About />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/certifications' element={<Certifications />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
