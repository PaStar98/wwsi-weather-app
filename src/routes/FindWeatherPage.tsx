import { Button, Paper, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const FindWeatherPage: React.FC = () => {
  const [inputValue, setInputValue] = React.useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <Paper sx={{ m: 5, p: 5 }}>
      <TextField
        label="Enter City Name"
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
        fullWidth
      />
      <Link to={`/find-weather/${inputValue}`}>
        <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Find Weather
        </Button>
      </Link>
    </Paper>
  )
}

export default FindWeatherPage
