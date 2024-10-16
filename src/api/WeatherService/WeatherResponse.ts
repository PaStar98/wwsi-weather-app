interface WeatherResponse {
  name: string
  main: {
    temp: string
  }
  weather: [
    {
      description: string
    },
  ]
}

export default WeatherResponse
