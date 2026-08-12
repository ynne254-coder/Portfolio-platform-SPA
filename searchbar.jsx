import React from 'react'

function SearchBar({ value, onChange }) {
  return (
    <input
      className="search"
      type="search"
      placeholder="Search projects..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Search projects"
    />
  )
}

export default SearchBar
