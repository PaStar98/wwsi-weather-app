import { Typography, Container, Paper } from '@mui/material'
import React from 'react'

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Weather App
        </Typography>
        <Typography variant="body1">
          Welcome to the Weather App! This application provides real-time weather updates,
          forecasts, and meteorological conditions for locations worldwide. Whether you are planning
          your week or just curious about today's weather, our app offers you detailed insights into
          temperature, humidity, wind speed, and more. Stay updated with us and make your day-to-day
          planning easier!
        </Typography>
      </Paper>
    </Container>
  )
}

export default HomePage
