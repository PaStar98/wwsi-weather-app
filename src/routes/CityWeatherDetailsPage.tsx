import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import kelvinToCelsius from '../utils/kelvinToCelsius'
import PixabayApiService from '../api/PixabayService/PixabayApiService'
import WeatherApiService from '../api/WeatherService/WeatherApiService'
import WeatherResponse from '../api/WeatherService/WeatherResponse'
import PixabayResponse from '../api/PixabayService/PixabayResponse'
import getRandomNumberInRange from '../utils/getRandomNumberInRange'
import joinWordsWithPlus from '../utils/joinWordsWithPlus'

const CityWeatherDetailsPage: React.FC = () => {
  const { city } = useParams<{ city: string }>()
  const [currentWeather, setCurrentWeather] = React.useState<WeatherResponse>()
  const [currentWeatherImage, setCurrentWeatherImage] = React.useState<PixabayResponse>()

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      const weatherService = new WeatherApiService()
      const weatherData: WeatherResponse = await weatherService.getWeatherByCity(city?.toString())
      setCurrentWeather(weatherData)
      console.log(weatherData)
    }

    fetchCurrentWeather()
  }, [city])

  useEffect(() => {
    const fetchWeatherImage = async () => {
      const weatherDescription = joinWordsWithPlus(currentWeather?.weather[0].description)
      const pixabayService = new PixabayApiService()
      const pixabayData: PixabayResponse =
        await pixabayService.getImageByCityWeather(weatherDescription)
      setCurrentWeatherImage(pixabayData)
      console.log(pixabayData)
    }

    fetchWeatherImage()
  }, [currentWeather])

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

export default CityWeatherDetailsPage
