import React from "react";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src="/pictuer.png" alt="Profile" />
        </div>
        <div className="about-info">
          <h2>I am <span className="highlight">Product Designer</span><br />& FullStack Web Developer</h2>
          <ul>
            <li><strong>Experience:</strong> 3 Years</li>
            <li><strong>Specialty:</strong> Graphic Designer, Product Designer, FullStack Developer</li>
            <li><strong>Address:</strong> Herat, Afghanistan</li>
            <li><strong>Email:</strong> azadehahmadi223@gmail.com</li>
            <li><strong>Phone:</strong> +93 728039939</li>
            <li><strong>Freelance:</strong> Available</li>
          </ul>
          <a href="#portfolio" className="view-projects-btn">Explore My Projects</a>
        </div>
      </div>
    </section>
  );
}
