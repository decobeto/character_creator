import './assets/css/reset.css'
import './assets/css/App.css'
import SelectionScreen from './components/selectionScreen'
import styled from 'styled-components'

const Section = styled.section`
  height: 100vh;
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #e17055, #e84393, #0984e3, #00b894);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

function App() {
  return (
    <div className="App">
      <Section>
        <SelectionScreen />
      </Section>
    </div>
  )
}

export default App
