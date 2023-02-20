import React from 'react'
import styled from 'styled-components'
import contender from '../assets/contender.jpg'
import fiveseven from '../assets/fiveseven.jpg'
import welrodmk2 from '../assets/welrodmk2.jpg'

const StatusBarContainer = styled.div<{ isPlayed: boolean }>`
  filter: ${({ isPlayed }) => isPlayed ? 'none' : 'blur(16px)'};
  position: fixed;
  top: 0;
  left: 0;
  height: 100px;
  z-index: 1;
`

const Image = styled.img`
  width: 75px;
`

const StatusBar: React.FC<{
  isPlayed: boolean
}> = ({ isPlayed }) => {
  return (
    <StatusBarContainer isPlayed={isPlayed}>
      <Image src={contender} />
      <Image src={fiveseven} />
      <Image src={welrodmk2} />
    </StatusBarContainer>
  )
}

export default StatusBar
