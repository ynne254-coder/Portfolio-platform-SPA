import React from 'react'

function ProjectCard({ project, index, onDelete }) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <article className="card">
      <div className="card__swatch" style={{ backgroundColor: project.swatch }} aria-hidden="true">
        <span className="card__number">{number}</span>
      </div>
      <div className="card__body">
        <div className="card__meta">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3 className="card__title">{project.title}</h3>
        <p className="card__description">{project.description}</p>
        <button
          type="button"
          className="card__delete"
          onClick={() => onDelete(project.id)}
          aria-label={`Remove ${project.title}`}
        >
          Remove project
        </button>
      </div>
    </article>
  )
}

export default ProjectCard

