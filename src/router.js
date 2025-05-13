import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Parteners } from './pages/parteners/Parteners';
import { Contact } from './pages/contact/Contact';
import { Solutions } from './pages/solutions/Solutions';
import { AskCharlee } from './pages/products/askcharlee/AskCharlee';
import { SeeCharlee } from './pages/products/seecharlee/SeeCharlee';
import { DocuCharlee } from './pages/products/docucharlee/DocuCharlee';
import { FindCharlee } from './pages/products/findcharlee/FindCharlee';
import { Blogs } from './pages/blogs/Blogs';
import { BlogContent } from './pages/blogs/BlogContent';
import { EventContent } from './pages/blogs/EventContent';
import { Usecase } from './pages/usecase/Usecase';
import ResearchPage from './pages/research/research';

 export const Router = () => {
  return (
    <BrowserRouter >
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/partners' element={<Parteners />} />
        <Route path='/connect' element={<Contact />} />
        <Route path='/solutions' element={<Solutions />}/>
        <Route path="/blogs/*" element={<Blogs />} />
        <Route path="/event/:eventname" element={<EventContent />} />
        <Route path="/blog/*" element={<BlogContent />} />
        <Route path='/product/askcharlee' element={<AskCharlee />} />
        <Route path='/product/seecharlee' element={<SeeCharlee />} />
        <Route path='/product/docucharlee' element={<DocuCharlee />} />
        <Route path='/product/findcharlee' element={<FindCharlee />} />
        <Route path='/usecase/*' element={<Usecase />} />
        <Route path='/research' element={<ResearchPage />} />
      </Routes>
    </BrowserRouter>
  )
}