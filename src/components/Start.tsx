import React from 'react'
import styled from 'styled-components'

type Bool = true | false

const Container = styled.div<{ played: Bool }>`
  display: ${({ played }) => played ? 'none' : 'flex'};
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
  background-color: rgba(200, 200, 200, 0.5);
`

const Start: React.FC<{ isPlayed: boolean }> = ({ isPlayed }) => {
  return (
    <Container played={isPlayed}>
      <p>YOUR OBJECTIVE IS TO FIND WALDO AS FAST AS POSSIBLE</p>
      <p>CLICK ANYWHERE TO START</p>
    </Container>
  )
}

export default Start
