import React from "react";

export default function Services() {
  return (
    <section className="services" id="services">
      <h2><span>My</span> Services</h2>
      <div className="service-boxes">
        <div className="service-card">
          <div className="icon-wrap bounce"><i className="fas fa-paint-brush" /></div>
          <h3>Web Design</h3>
          <p>Modern, responsive, user-friendly designs using Figma & Adobe XD.</p>
        </div>

        <div className="service-card">
          <div className="icon-wrap rotate"><i className="fas fa-code" /></div>
          <h3>Frontend Development</h3>
          <p>HTML, CSS, JS, Bootstrap, Tailwindcss, React — creating interactive web apps.</p>
        </div>

        <div className="service-card">
          <div className="icon-wrap pulse"><i className="fas fa-terminal" /></div>
          <h3>Full Stack Projects</h3>
          <p>Backend with Node.js & Frontend with modern frameworks.</p>
        </div>

        <div className="service-card">
          <div className="icon-wrap rotate"><i className="fas fa-video" /></div>
          <h3>Video Editing</h3>
          <p>Editing promotional videos & reels using Adobe tools.</p>
        </div>

        <div className="service-card">
          <div className="icon-wrap pulse"><i className="fas fa-chalkboard-teacher" /></div>
          <h3>Teaching</h3>
          <p>Experienced teacher in English, computer, and digital skills.</p>
        </div>
      </div>
    </section>
  );
}
