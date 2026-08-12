import React from 'react'
import ProjectCard from './projectcard.jsx'

function ProjectList({ projects, onDelete }) {
  if (!projects || projects.length === 0) {
    return <p className="empty">No projects found.</p>
  }

  return (
    <section className="cards">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          onDelete={onDelete}
        />
      ))}
    </section>
  )
}

export default ProjectList
