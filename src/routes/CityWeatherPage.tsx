import { Link as RouterLink } from 'react-router-dom'
import { useCities } from '../contexts/CitiesContext'
import {
  Button,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'

const CityWeatherPage: React.FC = () => {
  const cities = useCities()

  return (
    <>
      <Typography sx={{ my: 5 }} variant="h4">
        Wybierz miasto i sprawdź jaka jest obecnie pogoda
      </Typography>
      <TableContainer sx={{ padding: '.5rem 2rem' }} component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>#</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="right">
                Miasto
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="right">
                Akcje
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cities.map(city => (
              <TableRow key={city.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {city.id}
                </TableCell>
                <TableCell align="right">{city.name}</TableCell>
                <TableCell align="right">
                  <Link component={RouterLink} to={`/city-weather/${city.name}`} state={city.name}>
                    <Button variant="contained">Sprawdź</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default CityWeatherPage
