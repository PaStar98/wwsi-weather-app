import { Button, Paper, TextField } from '@mui/material'
import React from 'react'

const FindWeatherPage: React.FC = () => {
  const [inputValue, setInputValue] = React.useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = () => {
    alert(`Submitted Value: ${inputValue}`)
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
      <Button
        onClick={handleSubmit}
        variant="contained"
        color="primary"
        style={{ marginTop: '20px' }}
      >
        Find Weather
      </Button>
    </Paper>
  )
}

export default FindWeatherPage
