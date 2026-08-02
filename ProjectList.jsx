import ProjectCard from './ProjectCard.jsx'

function ProjectList({ projects, onDelete }) {
  if (projects.length === 0) {
    return (
      <div className="empty-state">
        <p>No projects match your search yet.</p>
        <p className="empty-state__hint">Try a different keyword, or add a new project below.</p>
      </div>
    )
  }

  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default ProjectList