import React from 'react'
import styled from 'styled-components'
import contender from '../assets/contender.jpg'
import fiveseven from '../assets/fiveseven.jpg'
import welrodmk2 from '../assets/welrodmk2.jpg'
import Timer from './Timer'

const StatusBarContainer = styled.div<{ isFounded: boolean }>`
  box-sizing: border-box;
  display: ${({ isFounded }) => isFounded ? 'none' : 'flex'};
  position: fixed;
  top: 0;
  left: 0;
  padding: 5px;
  height: 60px;
  width: 1366px;
  z-index: 1;
  background-color: black;
`

const FoundStatus = styled.div`
  position: relative;
  left: 200px;
`

const Image = styled.img<{ isFound: boolean }>`
  filter: ${({ isFound }) => isFound ? 'grayscale(100%)' : 'none'};
  width: 50px;
  height: 50px;
  margin: 0 10px;
`

const StatusBar: React.FC<{
  isPlayed: boolean
  isFounded: boolean
  isFoundContender: boolean
  isFoundFiveSeven: boolean
  isFoundWelrodMk2: boolean
  minutes: number
  seconds: number
}> = ({
  isPlayed,
  isFounded,
  isFoundContender,
  isFoundFiveSeven,
  isFoundWelrodMk2,
  minutes,
  seconds
}) => {
  return (
    <StatusBarContainer isFounded={isFounded}>
      <FoundStatus>
        <Image isFound={isFoundContender} src={contender} />
        <Image isFound={isFoundFiveSeven} src={fiveseven} />
        <Image isFound={isFoundWelrodMk2} src={welrodmk2} />
      </FoundStatus>
      <Timer
        isPlayed={isPlayed}
        isFounded={isFounded}
        minutes={minutes}
        seconds={seconds} />
    </StatusBarContainer>
  )
}

export default StatusBar
