import type { Island } from '@/types/island'

export const ISLANDS: Island[] = [
  {
    id: '1',
    name: 'San Michele',
    population: 75,
    airbnbCount: 2,
    congestion: 0.6,
    accessibility: 0.8,
    affordability: 0.4,
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [12.3456, 45.438],
          [12.346, 45.438],
          [12.346, 45.4384],
          [12.3456, 45.4384],
          [12.3456, 45.438],
        ],
      ],
    },
  },
  {
    id: '2',
    name: 'Giudecca',
    population: 500,
    airbnbCount: 45,
    congestion: 0.9,
    accessibility: 0.7,
    affordability: 0.3,
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [12.3301, 45.425],
          [12.3315, 45.425],
          [12.3315, 45.427],
          [12.3301, 45.427],
          [12.3301, 45.425],
        ],
      ],
    },
  },
  {
    id: '3',
    name: 'Murano',
    population: 1200,
    airbnbCount: 30,
    accessibility: 0.9,
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [12.355, 45.455],
          [12.356, 45.455],
          [12.356, 45.456],
          [12.355, 45.456],
          [12.355, 45.455],
        ],
      ],
    },
  },
]
