import React from 'react'
import styled from 'styled-components'

const Modal = styled.div<{
  isPlayed: boolean
  isSelecting: boolean
  isFounded: boolean
  x: number
  y: number
}>`
  display: ${({ isPlayed, isSelecting, isFounded }) => {
    return (isPlayed && isSelecting) && !isFounded ? 'block' : 'none'
  }};
  position: absolute;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  color: white;
`

const Selection: React.FC<{
  isPlayed: boolean
  isSelecting: boolean
  isFounded: boolean
  setSelecting: (arg: boolean) => void
  x: number
  y: number
}> = ({ isPlayed, isSelecting, isFounded, setSelecting, x, y }) => {
  const confirmSelection = (): void => {
    // validate selection here
    setSelecting(false)
  }
  return (
    <Modal
      isPlayed={isPlayed}
      isSelecting={isSelecting}
      isFounded={isFounded}
      onClick={confirmSelection}
      x={x} y={y} >
      <p>{x}, {y}</p>
    </Modal>
  )
}

export default Selection
