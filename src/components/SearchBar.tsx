'use client'

import { useState } from 'react'
import { useIsland } from '@/context/IslandContext'

export default function SearchBar() {
  const { selectIsland, setFilterQuery, filteredIslands } = useIsland()
  const [input, setInput] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInput(value)
    setFilterQuery(value)
    setShowSuggestions(true)
  }

  const handleSelect = (islandName: string) => {
    const islands = filteredIslands.find((i) => i.name === islandName)
    if (islands) {
      selectIsland(islands.id)
      setInput(islands.name)
      setShowSuggestions(false)
    }
  }

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        placeholder="Search islands..."
      />
      {showSuggestions && input.trim() !== '' && (
        <ul className="absolute bg-white border mt-1 w-full rounded z-500">
          {filteredIslands.slice(0, 5).map((island) => (
            <li
              key={island.id}
              onClick={() => handleSelect(island.name)}
              className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
            >
              {island.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
