import { Button, Container, Paper, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const NotFoundPage: React.FC = () => {
  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: '10%', textAlign: 'center' }}>
      <Paper elevation={3} style={{ padding: '30px' }}>
        <Typography variant="h4" gutterBottom>
          404
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          City Not Found
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/">
          Back to Home Page
        </Button>
      </Paper>
    </Container>
  )
}

export default NotFoundPage
