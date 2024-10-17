import { createContext, useContext } from 'react'

interface City {
  id: number
  name: string
}

interface CitiesContextType {
  cities: City[]
}

export const CitiesContext = createContext<CitiesContextType | undefined>(undefined)

export const useCities = (): City[] => {
  const context = useContext(CitiesContext)
  if (context === undefined) {
    throw new Error('useCities must be used within a CitiesProvider')
  }
  return context.cities
}
