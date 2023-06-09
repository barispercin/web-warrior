
import Anasayfa from "./Anasayfa";
import Hakkimizda from "./Hakkimizda"
import Islerimiz from "./Islerimiz"
import Hizmetlerimiz from "./Hizmetlerimiz"
import Iletisim from "./Iletisim"
import { useState } from "react";
import React from 'react';
import { Link } from 'gatsby';
import "./Navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleClick = (link) => {
    setActiveLink(link);
  };

  
  
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/" className="navbar-brand">
            ELEPHANTAPPS
          </Link>
        </div>
        <ul className="navbar-links">
          <li>
            <Link
              to="/"
              className={`navbar-link ${activeLink === 'Anasayfa' ? 'active' : ''}`}
              onClick={() => handleClick('Anasayfa')}
            >
              Anasayfa
            </Link>
          </li>
          <li>
            <Link
              to="/Hakkimizda"
              className={`navbar-link ${activeLink === 'Hakkimizda' ? 'active' : ''}`}
              onClick={() => handleClick('Hakkimizda')}
            >
              Hakkımızda
            </Link>
          </li>
          <li>
            <Link
              to="/Hizmetlerimiz"
              className={`navbar-link ${activeLink === 'Hizmetlerimiz' ? 'active' : ''}`}
              onClick={() => handleClick('Hizmetlerimiz')}
            >
              Hizmetlerimiz
            </Link>
          </li>
          <li>
            <Link
              to="/Islerimiz"
              className={`navbar-link ${activeLink === 'Islerimiz' ? 'active' : ''}`}
              onClick={() => handleClick('Islerimiz')}
            >
              İşlerimiz
            </Link>
          </li>
          <li>
            <Link
              to="/Kariyer"
              className={`navbar-link ${activeLink === 'Kariyer' ? 'active' : ''}`}
              onClick={() => handleClick('Kariyer')}
            >
              Kariyer
            </Link>
          </li>
          <li>
            <Link
              to="/Iletisim"
              className={`navbar-link ${activeLink === 'Iletisim' ? 'active' : ''}`}
              onClick={() => handleClick('Iletisim')}
            >
              İletişim
            </Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
