import React, { useMemo, useState } from 'react'
import SearchBar from './searchbar.jsx'
import ProjectList from './projectlist.jsx'
import ProjectForm from './projectform.jsx'
import initialProjects from './data/projects.js'

function App() {
  const [projects, setProjects] = useState(initialProjects)
  const [searchTerm, setSearchTerm] = useState('')
  const [isFormOpen, setIsFormOpen] = useState(false)

  const filteredProjects = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()
    if (!query) return projects
    return projects.filter((project) =>
      [project.title, project.category, project.description, String(project.year)]
        .some((value) => value.toLowerCase().includes(query)),
    )
  }, [projects, searchTerm])

  function handleAddProject(newProject) {
    setProjects((previous) => [newProject, ...previous])
    setIsFormOpen(false)
  }

  function handleDeleteProject(id) {
    setProjects((previous) => previous.filter((project) => project.id !== id))
  }

  return (
    <div className="page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Atelier and Co. home">atelier<span>&</span>co.</a>
        <p className="header-note">Independent creative studio<br />Selected work, 2023—24</p>
      </header>

      <header className="hero">
        <p className="hero__eyebrow">The work archive</p>
        <h1 className="hero__title">Thoughtful work,<br /><em>made to last.</em></h1>
        <p className="hero__subtitle">
          A living collection of identities, digital experiences, and ideas shaped with care.
          Browse the archive or add the next chapter.
        </p>
        <div className="hero__controls">
          <SearchBar value={searchTerm} onChange={setSearchTerm} resultCount={`${filteredProjects.length}/${projects.length}`} />
          <button type="button" className="btn btn--primary" onClick={() => setIsFormOpen(true)}>
            <span aria-hidden="true">+</span> New project
          </button>
        </div>
      </header>

      <main className="main">
        <div className="section-heading">
          <p className="section-heading__label">Selected projects</p>
          <p className="section-heading__meta">{filteredProjects.length} {filteredProjects.length === 1 ? 'result' : 'results'}</p>
        </div>
        <ProjectList projects={filteredProjects} onDelete={handleDeleteProject} hasSearch={Boolean(searchTerm.trim())} />
      </main>

      <footer className="site-footer">
        <span>© 2024 Atelier & Co.</span>
        <span>Made with intention.</span>
      </footer>

      {isFormOpen && <ProjectForm onAddProject={handleAddProject} onCancel={() => setIsFormOpen(false)} />}
    </div>
  )
}

export default App

