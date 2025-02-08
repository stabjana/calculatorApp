
import { Container, Paper, styled } from '@mui/material'
import './App.css'

function App() {
  const CalculatorBase = styled(Paper)(({theme})=> ({
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
    borderRadius: 15
  }))


  return (
    <Container maxWidth="sm">
      <CalculatorBase elevation={3}>Hello World</CalculatorBase>
    </Container>
  )
}

export default App
