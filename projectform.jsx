import React, { useEffect, useState } from 'react'

const SWATCH_OPTIONS = ['#C9432B', '#2F5D50', '#1B1A17', '#8A6D3B', '#3A5A7A']
const EMPTY_DRAFT = { title: '', category: '', year: new Date().getFullYear(), description: '' }

function ProjectForm({ onAddProject, onCancel }) {
  const [draft, setDraft] = useState(EMPTY_DRAFT)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onCancel()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onCancel])

  function updateField(field, value) {
    setDraft((previous) => ({ ...previous, [field]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!draft.title.trim() || !draft.category.trim()) return
    onAddProject({
      id: Date.now(),
      title: draft.title.trim(),
      category: draft.category.trim(),
      year: Number(draft.year) || new Date().getFullYear(),
      description: draft.description.trim() || 'No description added yet.',
      swatch: SWATCH_OPTIONS[Math.floor(Math.random() * SWATCH_OPTIONS.length)],
    })
    setDraft(EMPTY_DRAFT)
  }

  return (
    <div className="form-overlay" role="dialog" aria-modal="true" aria-labelledby="new-project-title" onMouseDown={(event) => event.target === event.currentTarget && onCancel()}>
      <form className="project-form" onSubmit={handleSubmit}>
        <div className="project-form__header">
          <div><p className="form-kicker">Add to the archive</p><h2 id="new-project-title">New project</h2></div>
          <button type="button" className="project-form__close" onClick={onCancel} aria-label="Close form">×</button>
        </div>
        <label className="project-form__field">Title<input autoFocus type="text" value={draft.title} onChange={(event) => updateField('title', event.target.value)} placeholder="e.g. Solstice Packaging" required /></label>
        <label className="project-form__field">Category<input type="text" value={draft.category} onChange={(event) => updateField('category', event.target.value)} placeholder="e.g. Branding" required /></label>
        <label className="project-form__field">Year<input type="number" min="1900" max="2100" value={draft.year} onChange={(event) => updateField('year', event.target.value)} /></label>
        <label className="project-form__field">Description<textarea value={draft.description} onChange={(event) => updateField('description', event.target.value)} placeholder="A sentence or two about the project." rows={3} /></label>
        <div className="project-form__actions"><button type="button" className="btn btn--ghost" onClick={onCancel}>Cancel</button><button type="submit" className="btn btn--primary">Add project</button></div>
      </form>
    </div>
  )
}

export default ProjectForm
