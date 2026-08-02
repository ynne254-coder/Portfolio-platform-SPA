import { useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import ProjectList from './components/ProjectList.jsx'
import ProjectForm from './components/ProjectForm.jsx'
import initialProjects from './data/projects.js'

function App() {
  const [projects, setProjects] = useState(initialProjects)
  const [searchTerm, setSearchTerm] = useState('')
  const [isFormOpen, setIsFormOpen] = useState(false)

  function handleAddProject(newProject) {
    setProjects((previous) => [newProject, ...previous])
    setIsFormOpen(false)
  }

  function handleDeleteProject(id) {
    setProjects((previous) => previous.filter((project) => project.id !== id))
  }

  const filteredProjects = projects.filter((project) => {
    const query = searchTerm.trim().toLowerCase()
    if (!query) return true
    return (
      project.title.toLowerCase().includes(query) ||
      project.category.toLowerCase().includes(query)
    )
  })

  return (
    <div className="page">
      <header className="hero">
        <p className="hero__eyebrow">Atelier & Co. — Selected Work</p>
        <h1 className="hero__title">
          Projects, cataloged
          <br />
          as we make them.
        </h1>
        <p className="hero__subtitle">
          {projects.length} project{projects.length === 1 ? '' : 's'} in the archive.
          Search below, or add the next one.
        </p>

        <div className="hero__controls">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => setIsFormOpen(true)}
          >
            + New project
          </button>
        </div>
      </header>

      <main className="main">
        <ProjectList projects={filteredProjects} onDelete={handleDeleteProject} />
      </main>

      {isFormOpen && (
        <ProjectForm
          onAddProject={handleAddProject}
          onCancel={() => setIsFormOpen(false)}
        />
      )}
    </div>
  )
}

export default App