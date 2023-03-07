import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 99%;
  height: 99%;
  background: rgba(255, 255, 255, 0.32);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.4px);
  -webkit-backdrop-filter: blur(2.4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
`

export default function SelectionScreen() {
  const myCanvas = useRef()

  useEffect(() => {
    const context = myCanvas.current.getContext('2d')

    context.beginPath()
    context.moveTo(100, 100)
    context.lineTo(100, 300)
    context.lineTo(300, 300)
    context.closePath()

    context.fillStyle = '#fdcb6e'
    context.fill()
  }, [])

  return (
    <Container>
      <canvas ref={myCanvas} width={500} height={500} />
    </Container>
  )
}
