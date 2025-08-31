import React from "react";

export default function Certificates() {
  return (
    <section className="cert-tree" id="certificates">
      <h2 className="section-title"><span>My</span> Certificates <span>&</span> Education</h2>
      <div className="timeline">
        <div className="timeline-container left">
          <div className="timeline-content" data-aos="fade-right">
            <i className="fas fa-laptop-code" style={{ color: "#00bfff" }}></i>
            <h3>Front-end Web Development Certificate</h3>
            <span className="date">Oct 2022 – Jun 2024</span>
            <p>14-month Front-end Web Development course by CTI, Afghanistan.</p>
          </div>
        </div>

        <div className="timeline-container right">
          <div className="timeline-content" data-aos="fade-left">
            <i className="fas fa-paint-brush" style={{ color: "#00bfff" }}></i>
            <h3>Back-End Web Development</h3>
            <span className="date">Feb 2024 – Dec 2024</span>
            <p>11-month Back-End Web Development course by CTI, Afghanistan.</p>
          </div>
        </div>

        <div className="timeline-container left">
          <div className="timeline-content" data-aos="fade-right">
            <i className="fas fa-project-diagram" style={{ color: "#00bfff" }}></i>
            <h3>Introduction to HTML, CSS, & JavaScript</h3>
            <span className="date">Online IBM – Feb 23, 2025</span>
            <p>Introduction to HTML, CSS, & JavaScript programmin language by Google via Coursera.</p>
          </div>
        </div>

        <div className="timeline-container right">
          <div className="timeline-content" data-aos="fade-left">
            <i className="fas fa-image" style={{ color: "#00bfff" }}></i>
            <h3>Search and AI</h3>
            <span className="date">Online HUAWEI – March 31, 2025</span>
            <p>This program provided foundation in AI with a focus on search technologies.</p>
          </div>
        </div>

        <div className="timeline-container left">
          <div className="timeline-content" data-aos="fade-right">
            <i className="fas fa-language" style={{ color: "#00bfff" }}></i>
            <h3>Foundations of Cybersecurity - Google</h3>
            <span className="date">Online Coursera – Feb 12, 2025</span>
            <p>Core principles and practices of cybersecurity.</p>
          </div>
        </div>

        <div className="timeline-container right">
          <div className="timeline-content" data-aos="fade-left">
            <i className="fas fa-code-branch" style={{ color: "#00bfff" }}></i>
            <h3>AI Basic Overview of AI</h3>
            <span className="date">Online HUAWEI – Mar 31, 2025</span>
            <p>Introductory program covering concepts and applications of AI.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
