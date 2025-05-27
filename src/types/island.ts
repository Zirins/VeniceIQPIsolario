// src/types/island.ts
export type Island = {
  id: string
  name: string
  population: number
  airbnbCount: number
  congestion?: number
  accessibility?: number
  affordability?: number
  geometry?: {
    type: 'Polygon' | 'MultiPolygon'
    coordinates: number[][][] // We can refine this later using GeoJSON spec
  }
}
