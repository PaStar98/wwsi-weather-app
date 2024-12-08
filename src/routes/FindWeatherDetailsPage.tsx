import { useEffect, useState } from 'react'
import WeatherApiService from '../api/WeatherService/WeatherApiService'
import WeatherResponse from '../api/WeatherService/WeatherResponse'
import PixabayResponse from '../api/PixabayService/PixabayResponse'
import PixabayApiService from '../api/PixabayService/PixabayApiService'
import joinWordsWithPlus from '../utils/joinWordsWithPlus'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Paper, Typography } from '@mui/material'
import getRandomNumberInRange from '../utils/getRandomNumberInRange'
import kelvinToCelsius from '../utils/kelvinToCelsius'
import LoadingSpinner from '../components/LoadingSpinner'

const FindWeatherDetailsPage: React.FC = () => {
  const { city } = useParams<{ city: string }>()
  const navigate = useNavigate()

  const [currentWeather, setCurrentWeather] = useState<WeatherResponse | null>(null)
  const [currentWeatherImage, setCurrentWeatherImage] = useState<PixabayResponse | null>(null)
  const [weatherLoading, setWeatherLoading] = useState<boolean>(true)
  const [imageLoading, setImageLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      setWeatherLoading(true)
      const weatherService = new WeatherApiService()
      try {
        const weatherData: WeatherResponse = await weatherService.getWeatherByCity(city?.toString())
        if (weatherData.cod === '404') {
          navigate('/404') // Przekierowanie na stronę 404
          return
        }
        setCurrentWeather(weatherData)
        console.log(weatherData)
      } catch (error) {
        console.error('Error fetching weather data:', error)
        navigate('/404') // W razie błędu przekierowanie na stronę 404
      } finally {
        setWeatherLoading(false)
      }
    }

    if (city) {
      fetchCurrentWeather()
    }
  }, [city, navigate])

  useEffect(() => {
    const fetchWeatherImage = async () => {
      if (!currentWeather) return

      setImageLoading(true)
      try {
        const weatherDescription = joinWordsWithPlus(currentWeather.weather[0].description)
        const pixabayService = new PixabayApiService()
        const pixabayData: PixabayResponse =
          await pixabayService.getImageByCityWeather(weatherDescription)
        setCurrentWeatherImage(pixabayData)
        console.log(pixabayData)
      } catch (error) {
        console.error('Error fetching weather image:', error)
      } finally {
        setImageLoading(false)
      }
    }
    fetchWeatherImage()
  }, [currentWeather])

  if (weatherLoading || imageLoading) {
    return <LoadingSpinner />
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
      <Paper elevation={3} sx={{ p: 2, maxWidth: 1000 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          {currentWeather?.name}
        </Typography>
        <img
          src={currentWeatherImage?.hits[getRandomNumberInRange(0, 5)].webformatURL}
          alt="Weather Image"
        />
        <Typography variant="h4" component="p" sx={{ fontWeight: 'bold' }}>
          {kelvinToCelsius(currentWeather?.main.temp)}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {currentWeather?.weather[0].description}
        </Typography>
      </Paper>
    </Box>
  )
}

export default FindWeatherDetailsPage
