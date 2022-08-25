import './App.css'
import OlMap from "./components/Map"
import styled from 'styled-components'

const AppStyles = styled.div`
  width: 100vw;
  overflow: hidden;
  height: 100vh;
`

const App = () => (
  <AppStyles>
    <OlMap />
  </AppStyles>
)

export default App
