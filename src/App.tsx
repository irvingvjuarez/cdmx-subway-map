import './App.css'
import OlMap from "./components/Map"
import styled from 'styled-components'

const AppStyles = styled.div`
  width: 100vw;
  height: 100vh;
`

const App = () => (
  <AppStyles>
    <OlMap />
  </AppStyles>
)

export default App
