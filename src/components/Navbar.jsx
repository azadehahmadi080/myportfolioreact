import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="logo">Azadeh <span></span></div>

      <div className="menu-toggle" onClick={() => setOpen((s) => !s)}>
        <i className="fas fa-bars"></i>
      </div>

      <ul id="nav-menu" className={open ? "active" : ""}>
        <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
        <li><a href="#certificates" onClick={() => setOpen(false)}>Certificates & Education</a></li>
        <li><a href="#services" onClick={() => setOpen(false)}>Services</a></li>
        <li><a href="#portfolio" onClick={() => setOpen(false)}>Portfolio</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>

      <a href="#contact" className="contact-btn">Contact me</a>
    </nav>
  );
}
