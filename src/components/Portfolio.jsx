import React from "react";
import projects from "../data/projects";

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="section-title"><span>My</span> Portfolio</h2>
      <div className="portfolio-boxes">
        {projects.map((p) => (
          <div key={p.id} className="portfolio-card" data-aos="fade-up">
            <img src={p.img} alt={p.title} />
            <div className="content">
              <small>{p.small}</small>
              <h4>{p.title}</h4>
              <p>
                {p.desc.length > 120 ? p.desc.slice(0, 120) + "..." : p.desc}
              </p>

             
              <div className="btn-box">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-live-preview"
                >
                  {p.cta}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
