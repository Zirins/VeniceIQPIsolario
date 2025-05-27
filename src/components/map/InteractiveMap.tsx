'use client'

import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import { ISLANDS } from '@/data/islands'
import { useIsland } from '@/context/IslandContext'
import 'leaflet/dist/leaflet.css'

export default function InteractiveMap() {
  const { selectIsland } = useIsland()

  return (
    <MapContainer center={[45.4379, 12.3346]} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {ISLANDS.map((island) => (
        <GeoJSON
          key={island.id}
          data={{
            type: 'Feature',
            properties: { id: island.id },
            geometry: island.geometry!,
          }}
          eventHandlers={{
            click: () => selectIsland(island.id),
          }}
        />
      ))}
    </MapContainer>
  )
}
