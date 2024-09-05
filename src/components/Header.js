import React from 'react';
import { FiSearch } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <div>
          <img src={require("../assets/comp_logo.png")} alt="Clinix Sphere Logo" />
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#doctors">Doctors</a>
          <a href="#services">Services</a>
          <a href="#blog">Blog</a>
        </nav>
      </div>
      <div className="search">
        <FiSearch className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>
    </header>
  );
}

export default Header;
