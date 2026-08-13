import React from 'react'
import ProjectCard from './projectcard.jsx'

function ProjectList({ projects, onDelete, hasSearch }) {
  if (!projects || projects.length === 0) {
    return (
      <section className="empty-state" aria-live="polite">
        <p className="empty-state__title">No projects match your search yet.</p>
        <p className="empty-state__hint">
          {hasSearch ? 'Try another keyword or clear the search.' : 'Add your first project to start the archive.'}
        </p>
      </section>
    )
  }

  return (
    <section className="project-grid" aria-label="Portfolio projects">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} onDelete={onDelete} />
      ))}
    </section>
  )
}

export default ProjectList

