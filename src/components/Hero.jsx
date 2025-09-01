import React from "react";
import useTyping from "../hooks/useTyping";

export default function Hero() {
  const roles = ["Frontend Engineer", "FullStack Web Developer", "UI/UX Designer", "Freelancer"];
  const roleText = useTyping(roles, { typingSpeed: 100, deletingSpeed: 50, pause: 2000 });

  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <h3>Hi, there!</h3>
        <h4>I am Azadeh Ahmadi.</h4>
        <h1>I am a <span className="typing role">{roleText}</span></h1>
        <p>Hello! I am a passionate and creative individual who loves turning ideas into beautiful, user-friendly digital experiences.</p>

        <div className="socials">
          <a href="https://x.com/AzadehAhma93819" target="_blank" rel="noreferrer"><i className="fab fa-x"></i></a>
          <a href="https://www.instagram.com/azadehahmadi_2228/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://github.com/azadehahmadi080" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
        </div>

        <div className="buttons">
          <a href="mailto:azadehahmadi223@gmail.com" className="btn-hire">Hire me</a>
          <a href="/resume_template_main (1).pdf" className="btn-cv" download><i className="fas fa-download"></i> Download CV</a>
        </div>
      </div>

      <div className="hero-right">
        <img src="/profileimg.jpeg" alt="Your Photo" />
      </div>
    </section>
  );
}
