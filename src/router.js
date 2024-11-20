import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Parteners } from './pages/parteners/Parteners';
import { Contact } from './pages/contact/Contact';

 export const Router = () => {
  return (
    <BrowserRouter >
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/partners' element={<Parteners />} />
        <Route path='/connect' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}