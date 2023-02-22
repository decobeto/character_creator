import { useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 90%;
  background: rgba(255, 255, 255, 0.32);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.4px);
  -webkit-backdrop-filter: blur(2.4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`

export default function SelectionScreen() {
  const myCanvas = useRef()
  return (
    <Container>
      <canvas ref={myCanvas} width={400} height={400} />
    </Container>
  )
}
