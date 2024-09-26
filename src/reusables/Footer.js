
import logo_footer from "../assets/logo_footer.png";

function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
            <img src={logo_footer} alt="" className="logo-footer"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
       </footer>
    );
  }

export default Footer;