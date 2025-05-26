'use client'
import { createContext, useContext, useState } from 'react'
import { Island } from '@/types/island'

type IslandContextType = {
  SelectedIsland: Island | null
  setSelectedIsland: (island: Island | null) => void
}

const IslandContext = createContext<IslandContextType | undefined>(undefined)

export const IslandProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedIsland, setSelectedIsland] = useState<Island | null>(null)

  return (
    <IslandContext.Provider value={{ SelectedIsland: selectedIsland, setSelectedIsland }}>
      {children}
    </IslandContext.Provider>
  )
}

export const useIsland = () => {
  const context = useContext(IslandContext)
  if (!context) throw new Error('useIsland must be used inside IslandProvider')
  return context
}
