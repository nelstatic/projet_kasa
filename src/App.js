import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
// pages
import Home from "./pages/home/Home.js";
import AboutUs from "./pages/aboutus/AboutUs.js";
import HousingPage from "./pages/housing-page/HousingPage.js";
import PageError from "./pages/page-error/PageError.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="/logement/:id" element={<HousingPage />} />
          <Route path="*" element={<PageError />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
