'use client'

import { IslandProvider } from '@/context/IslandContext'
import InteractiveMap from '@/components/map/InteractiveMap'
import IslandInfoPanel from '@/components/IslandInfoPanel'

export default function MapPage() {
  return (
    <IslandProvider>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-4 p-4 h-screen">
        <InteractiveMap />
        <IslandInfoPanel />
      </div>
    </IslandProvider>
  )
}
