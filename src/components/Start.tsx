import React from 'react'
import styled from 'styled-components'

type Bool = true | false

const Container = styled.div<{ started: Bool }>`
  display: ${({ started }) => started ? 'none' : 'flex'};
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: fixed;
  top: 10vh;
  bottom: 10vh;
  right: 10vw;
  left: 10vw;
  font-size: 40px;
  font-weight: bolder;
`

const Start: React.FC<{ isStarted: boolean }> = ({ isStarted }) => {
  return (
    <Container started={isStarted}>
      <p>YOUR OBJECTIVE IS TO FIND WALDO AS FAST AS POSSIBLE</p>
      <p>CLICK ANYWHERE TO START</p>
    </Container>
  )
}

export default Start
