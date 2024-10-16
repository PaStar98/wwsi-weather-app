import { Typography, Box } from '@mui/material'
import React from 'react'

const HomePage: React.FC = () => {
  return (
    <Box width={1000}>
      <Typography component="h1" textAlign="center" variant="h4" my={5}>
        Wybierz miasto i sprawdź jaka jest obecnie pogoda
      </Typography>
    </Box>
  )
}

export default HomePage
