import React from 'react'
import styled from 'styled-components'

const convertDigit = (arg: number): string => '0' + arg.toString()

const DisplayTime = styled.div<{ isPlayed: boolean, isFounded: boolean }>`
  display: ${({ isPlayed, isFounded }) => isPlayed && !isFounded ? 'block' : 'none'};
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: rgba(200, 200, 200, 0.5);
  width: 160px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 40px;
`

const Timer: React.FC<{
  isPlayed: boolean
  isFounded: boolean
  minutes: number
  seconds: number
}> = ({ isPlayed, isFounded, minutes, seconds }) => {
  return (
    <DisplayTime
      isPlayed={isPlayed}
      isFounded={isFounded} >
      {minutes < 10 ? convertDigit(minutes) : minutes}
      :
      {seconds < 10 ? convertDigit(seconds) : seconds}
    </DisplayTime>
  )
}

export default Timer
