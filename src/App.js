import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Personnel from './pages/Personnel.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <div className="appwrapper">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/personnel' element={<Personnel />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
