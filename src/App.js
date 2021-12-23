import React from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ErrorPage from './pages/ErrorPage'
import { Routes , Route , useLocation} from 'react-router-dom'


function App() {
  const location = useLocation()
  return (
    <>
      <Navbar />
      <Routes location={location} key={location.key}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
