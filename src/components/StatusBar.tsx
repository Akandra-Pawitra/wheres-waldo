import React from 'react'
import styled from 'styled-components'
import contender from '../assets/contender.jpg'
import fiveseven from '../assets/fiveseven.jpg'
import welrodmk2 from '../assets/welrodmk2.jpg'

const StatusBarContainer = styled.div<{ isFounded: boolean }>`
  display: ${({ isFounded }) => isFounded ? 'none' : 'block'};
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  z-index: 1;
  background-color: black;
`

const Image = styled.img`
  width: 50px;
`

const StatusBar: React.FC<{
  isFounded: boolean
}> = ({ isFounded }) => {
  return (
    <StatusBarContainer isFounded={isFounded}>
      <Image src={contender} />
      <Image src={fiveseven} />
      <Image src={welrodmk2} />
    </StatusBarContainer>
  )
}

export default StatusBar
