import React from 'react'
import styled from 'styled-components'

const Modal = styled.div<{
  played: boolean
  selecting: boolean
  founded: boolean
  x: number
  y: number
}>`
  display: ${({ played, selecting, founded }) => {
    return (played && selecting) && !founded ? 'block' : 'none'
  }};
  position: absolute;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
`

const Selection: React.FC<{
  played: boolean
  selecting: boolean
  founded: boolean
  setSelecting: (arg: boolean) => void
  x: number
  y: number
}> = ({ played, selecting, founded, setSelecting, x, y }) => {
  const confirmSelection = (): void => {
    // validate selection here
    setSelecting(false)
  }
  return (
    <Modal
      played={played}
      selecting={selecting}
      founded={founded}
      onClick={confirmSelection}
      x={x} y={y} >
      <p>SELECT</p>
    </Modal>
  )
}

export default Selection
