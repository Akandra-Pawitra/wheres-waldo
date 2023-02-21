import React, { type Dispatch, type SetStateAction } from 'react'
import styled from 'styled-components'

const checkRange = (valid: any, coor: number[]): boolean => {
  return (
    coor[0] > valid[0][0] &&
    coor[0] < valid[0][1] &&
    (coor[1] - 60) > valid[1][0] &&
    (coor[1] - 60) < valid[1][1]
  )
}

const Modal = styled.div<{
  isPlayed: boolean
  isSelecting: boolean
  isFounded: boolean
  x: number
  y: number
}>`
  display: ${({ isPlayed, isSelecting, isFounded }) => {
    return (isPlayed && isSelecting) && !isFounded ? 'flex' : 'none'
  }};
  flex-direction: column;
  position: absolute;
  top: ${({ y }) => y - 45}px;
  left: ${({ x }) => x - 55}px;
  background-color: rgba(200, 200, 200, 0.5);
  outline: 1px solid rgba(200, 200, 200, 0.8);
  padding: 5px;
`

const SelectButton = styled.button`
  background-color: rgba(200, 200, 200, 0.6);
  color: rgb(25, 25, 25);
  padding: 2px;
  width: 100px;
`

const Selection: React.FC<{
  isPlayed: boolean
  isSelecting: boolean
  isFounded: boolean
  isFoundContender: boolean
  isFoundFiveSeven: boolean
  isFoundWelrodMk2: boolean
  found: () => void
  setFoundContender: Dispatch<SetStateAction<boolean>>
  setFoundFiveSeven: Dispatch<SetStateAction<boolean>>
  setFoundWelrodMk2: Dispatch<SetStateAction<boolean>>
  setSelecting: (arg: boolean) => void
  x: number
  y: number
}> = ({
  isPlayed,
  isSelecting,
  isFounded,
  isFoundContender,
  isFoundFiveSeven,
  isFoundWelrodMk2,
  found,
  setFoundContender,
  setFoundFiveSeven,
  setFoundWelrodMk2,
  setSelecting,
  x,
  y
}) => {
  const confirmSelection = (char: number, coor: number[]): void => {
    const valid = [
      [[520, 630], [480, 640]],
      [[910, 960], [200, 360]],
      [[510, 540], [80, 170]]
    ]
    if (checkRange(valid[char], coor)) {
      switch (char) {
        case 0:
          setFoundContender(true)
          if (isFoundFiveSeven && isFoundWelrodMk2) found()
          break

        case 1:
          setFoundFiveSeven(true)
          if (isFoundContender && isFoundWelrodMk2) found()
          break

        case 2:
          setFoundWelrodMk2(true)
          if (isFoundContender && isFoundFiveSeven) found()
          break
      }
    }
    setSelecting(false)
  }
  return (
    <Modal
      isPlayed={isPlayed}
      isSelecting={isSelecting}
      isFounded={isFounded}
      x={x} y={y} >
      <SelectButton
        onClick={() => { confirmSelection(0, [x, y]) }} >
        Contender
      </SelectButton>
      <SelectButton
        onClick={() => { confirmSelection(1, [x, y]) }} >
        Five Seven
      </SelectButton>
      <SelectButton
        onClick={() => { confirmSelection(2, [x, y]) }} >
         Welrod MkII
      </SelectButton>
    </Modal>
  )
}

export default Selection
