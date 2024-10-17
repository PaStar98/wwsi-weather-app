import React, { useState } from 'react'
import { CitiesContext } from './useCities'

interface CitiesProviderProps {
  children: React.ReactNode
}

export const CitiesProvider: React.FC<CitiesProviderProps> = ({ children }) => {
  const [cities] = useState([
    { id: 1, name: 'Warsaw' },
    { id: 2, name: 'Poznan' },
    { id: 3, name: 'Krakow' },
    { id: 4, name: 'Wroclaw' },
    { id: 5, name: 'Gdansk' },
    { id: 6, name: 'Szczecin' },
    { id: 7, name: 'Lublin' },
    { id: 8, name: 'Katowice' },
    { id: 9, name: 'Bialystok' },
    { id: 10, name: 'Gdynia' },
  ])

  return <CitiesContext.Provider value={{ cities }}>{children}</CitiesContext.Provider>
}
