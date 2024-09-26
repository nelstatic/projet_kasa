import { BrowserRouter, Routes, Route} from "react-router-dom"

//reusables
import Header from './reusables/Header.js';
import Footer from './reusables/Footer.js';
// pages
import Accueil from './pages/Accueil.js'
import Apropos from './pages/Apropos.js'
//import Page_erreur from './pages/Page_erreur.js';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="apropos" element={<Apropos />} />
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;