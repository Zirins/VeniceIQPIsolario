'use client'

import { IslandProvider } from '@/context/IslandContext'
import dynamic from 'next/dynamic'

const InteractiveMap = dynamic(() => import('@/components/map/InteractiveMap'), {
  ssr: false,
})
import IslandInfoPanel from '@/components/IslandInfoPanel'
import SearchBar from '@/components/SearchBar'

export default function MapPage() {
  return (
    <IslandProvider>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-4 p-4 h-screen">
        <div>
          <SearchBar />
          <InteractiveMap />
        </div>
        <IslandInfoPanel />
      </div>
    </IslandProvider>
  )
}
