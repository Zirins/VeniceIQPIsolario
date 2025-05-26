'use client'

import { useQuery } from '@apollo/client'
import { GET_ISLANDS } from '@/lib/graphql/queries'
import { Island } from '@/types/island'

export default function IslandListPage() {
  const { loading, error, data } = useQuery(GET_ISLANDS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error loading islands.</p>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Islands</h1>
      <ul>
        {data.islands.map((island: Island) => (
          <li key={island.id} className="mb-2">
            <strong>{island.name}</strong> — Population: {island.population}, Airbnb:{' '}
            {island.airbnbCount}
          </li>
        ))}
      </ul>
    </div>
  )
}
