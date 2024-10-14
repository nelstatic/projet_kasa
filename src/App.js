import { BrowserRouter, Routes, Route} from "react-router-dom"

//components
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
// pages
import Home from './pages/home/Home.js';
import AboutUs from './pages/aboutus/AboutUs.js';
//import Page_erreur from './pages/Page_erreur.js';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;