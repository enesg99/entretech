import { Outlet, Link } from "react-router-dom";
import "./componentStyle/navbar.css"; 
import { useState } from "react";
import Logo from "../images/Logo.png"

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return ( 
    <>
      <nav>
        <div id="logoContainer">
          <img src={Logo} id="logo" alt="Entretech Logo" />
          <div style={{marginLeft: '10px'}}>
            <Link to='/' style={{fontSize: '24px', fontWeight: '800'}}>EntreTech</Link>
            <p>Your passion is our mission</p>
          </div>
        </div>
        <div id="navLinkContainer">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/tracks'>Tracks</Link></li> 
            <li><Link to=''>FAQ</Link></li> 
            <li><Link to=''>Kontakt</Link></li> 
          </ul>
        </div>
      </nav>

      <div id="hamburgerMenu" onClick={toggleMenu}>
        <div className="spanContainer">
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </div>
      </div>

      <ul className={`hamburgerMenuItems ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to='/' onClick={toggleMenu}>Home</Link></li>
        <li><Link to='/tracks' onClick={toggleMenu}>Tracks</Link></li> 
        <li><Link to='' onClick={toggleMenu}>FAQ</Link></li> 
        <li><Link to='' onClick={toggleMenu}>Kontakt</Link></li>
      </ul>

      <Outlet />
    </>
  );
}

export default Navbar;