import React from 'react'
import styled from 'styled-components'
import Background from './Background'
import StatusBar from './StatusBar'

const Container = styled.div`
  position: static;
`

const ClickStart = styled.div<{ isPlayed: boolean, isFounded: boolean }>`
  display: ${({ isPlayed, isFounded }) => isPlayed || isFounded ? 'none' : 'flex'};
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: fixed;
  top: 60px;
  bottom: 0;
  right: 0;
  left: 0;
  font-size: 40px;
  font-weight: bolder;
  background-color: rgba(200, 200, 200, 0.5);
  z-index: 1;
`

const Start: React.FC<{
  isPlayed: boolean
  isFounded: boolean
  found: () => void
}> = ({ isPlayed, isFounded, found }) => {
  return (
    <Container>
      <StatusBar isFounded={isFounded} />
      <ClickStart isPlayed={isPlayed} isFounded={isFounded}>
        <p>CLICK ANYWHERE TO START</p>
      </ClickStart>
      <Background
        isPlayed={isPlayed}
        isFounded={isFounded}
        found={found} />
    </Container>
  )
}

export default Start
