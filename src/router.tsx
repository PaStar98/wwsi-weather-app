import { createBrowserRouter } from 'react-router-dom'
import CityWeatherPage from './routes/CityWeatherPage'
import FindWeatherPage from './routes/FindWeatherPage'
import HomePage from './routes/HomePage'
import Layout from './components/Layout'
import CityWeatherDetailsPage from './routes/CityWeatherDetailsPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'city-weather/',
        element: <CityWeatherPage />,
      },
      {
        path: 'city-weather/:city',
        element: <CityWeatherDetailsPage />,
      },
      {
        path: 'find-weather',
        element: <FindWeatherPage />,
      },
    ],
  },
])
