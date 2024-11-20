import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Parteners } from './pages/parteners/Parteners';

 export const Router = () => {
  return (
    <BrowserRouter >
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/parteners' element={<Parteners />} />
      </Routes>
    </BrowserRouter>
  )
}