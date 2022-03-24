import React from 'react';
import Home from './pages/home/Home';
import Navbar from './components/UI/navbar/Navbar';
import About from './pages/about/About';
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import ErrorPage from './pages/errorPage/ErrorPage'
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
