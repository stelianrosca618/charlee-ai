import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';

 export const Router = () => {
  return (
    <BrowserRouter >
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}