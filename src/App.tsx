import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { CitiesProvider } from './contexts/CitiesContext'

export default function App() {
  return (
    <CitiesProvider>
      <RouterProvider router={router} />
    </CitiesProvider>
  )
}

// TODO: remove useLocation hook, use query params instead
// TODO: change lang to en
// TODO: move city weather form home to CityWeather Component
