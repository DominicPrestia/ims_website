import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Personnel from './pages/Personnel.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound.jsx'

function App() {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = window.innerHeight * 0.05; // 5vh offset
      const yPosition = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  };


  return (
    <div className="appwrapper">
      <BrowserRouter>
        <Navbar scrollToSection={scrollToSection} />
        <Home />
        <Personnel />
        <Services />
        <Contact />
        {/* <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/personnel' element={<Personnel />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
