import React, { createContext, useContext, useState } from 'react'

interface City {
  id: number
  name: string
}

interface CitiesContextType {
  cities: City[]
}

interface CitiesProviderProps {
  children: React.ReactNode
}

const CitiesContext = createContext<CitiesContextType | undefined>(undefined)

export const CitiesProvider: React.FC<CitiesProviderProps> = ({ children }) => {
  const [cities] = useState([
    { id: 1, name: 'Warszawa' },
    { id: 2, name: 'Poznań' },
    { id: 3, name: 'Kraków' },
    { id: 4, name: 'Wrocław' },
    { id: 5, name: 'Gdańsk' },
    { id: 6, name: 'Szczecin' },
    { id: 7, name: 'Lublin' },
    { id: 8, name: 'Katowice' },
    { id: 9, name: 'Białystok' },
    { id: 10, name: 'Gdynia' },
  ])

  return <CitiesContext.Provider value={{ cities }}>{children}</CitiesContext.Provider>
}

export const useCities = (): City[] => {
  const context = useContext(CitiesContext)
  if (context === undefined) {
    throw new Error('useCities must be used within a CitiesProvider')
  }
  return context.cities
}
