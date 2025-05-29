'use client'

import { useIsland } from '@/context/IslandContext'

export default function SearchBar() {
  const { setFilterQuery } = useIsland()

  return (
    <input
      type="text"
      onChange={(e) => setFilterQuery(e.target.value)}
      placeholder="Search islands..."
      className="w-full p-2 border border-gray-300 rounded-md mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  )
}
