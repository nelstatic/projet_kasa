import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
    return (
      <header className="header">
        <nav>
            <img src={logo} alt="" className="logo"/>
            <ul>
                <li><NavLink to="/" className="nav-link" exact>Accueil</NavLink></li>
                <li><NavLink to="/aboutus" className="nav-link">A propos</NavLink></li>
            </ul>
        </nav>
      </header>
    );
  }

  export default Header;