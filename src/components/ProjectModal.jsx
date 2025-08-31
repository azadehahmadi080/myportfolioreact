import React from "react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <p><strong>Tech Used:</strong> {project.tech}</p>
        <img src={project.img} alt={project.title} style={{ width: "100%", marginTop: "1rem", borderRadius: 10 }} />
        <div style={{ marginTop: "1rem" }}>
          <a href={project.link} target="_blank" rel="noreferrer" className="btn-hire" style={{ marginLeft: "1rem" }}>
            {project.cta}
          </a>
        </div>
      </div>
    </div>
  );
}
