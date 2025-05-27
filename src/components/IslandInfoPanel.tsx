'use client'

import { useIsland } from '@/context/IslandContext'

export default function IslandInfoPanel() {
  const { selectedIsland } = useIsland()

  if (!selectedIsland) {
    return <p className="text-gray-500 italic">Click on an island to see its info.</p>
  }

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-2">{selectedIsland.name}</h2>
      <p>
        <strong>Population:</strong> {selectedIsland.population}
      </p>
      <p>
        <strong>Airbnb Count:</strong> {selectedIsland.airbnbCount}
      </p>
      <p>
        <strong>Congestion:</strong> {selectedIsland.congestion ?? 'N/A'}
      </p>
    </div>
  )
}
