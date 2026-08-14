import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './app.jsx'

describe('App', () => {
  it('renders the starter projects', () => {
    render(<App />)
    expect(screen.getByText('Solstice Packaging')).toBeInTheDocument()
    expect(screen.getByText('Atlas Website')).toBeInTheDocument()
  })

  it('filters projects when searching', () => {
    render(<App />)
    const input = screen.getByLabelText('Search projects')

    fireEvent.change(input, { target: { value: 'solstice' } })

    expect(screen.getByText('Solstice Packaging')).toBeInTheDocument()
    expect(screen.queryByText('Atlas Website')).not.toBeInTheDocument()
  })

  it('shows an empty state when nothing matches', () => {
    render(<App />)
    const input = screen.getByLabelText('Search projects')

    fireEvent.change(input, { target: { value: 'zzzznotaproject' } })

    expect(screen.getByText('No projects match your search yet.')).toBeInTheDocument()
  })

  it('adds a new project through the form', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /New project/ }))
    fireEvent.change(screen.getByPlaceholderText('e.g. Solstice Packaging'), {
      target: { value: 'Test Project' },
    })
    fireEvent.change(screen.getByPlaceholderText('e.g. Branding'), {
      target: { value: 'Testing' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Add project' }))

    expect(screen.getByText('Test Project')).toBeInTheDocument()
  })

  it('removes a project when Remove is clicked', () => {
    render(<App />)

    const removeButtons = screen.getAllByRole('button', { name: /Remove/ })
    fireEvent.click(removeButtons[0])

    expect(screen.queryByText('Solstice Packaging')).not.toBeInTheDocument()
  })
})