// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/home';
import BookDemo from './pages/bookDemo';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer/Footer';
import Leadership from './pages/Leadership';
import Blogs from './pages/Blogs';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-demo" element={<BookDemo />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;