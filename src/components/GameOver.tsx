import React from 'react'
import styled from 'styled-components'

const Over = styled.div<{ found: boolean }>`
  display: ${({ found }) => found ? 'flex' : 'none'};
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

const ActionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Action = styled.button`
  background-color: rgb(200, 200, 200);
  margin: auto;
  color: black;
  font-size: 36px;
`

const GameOver: React.FC<{
  isFounded: boolean
  time: string
  restart: () => void
}> = ({ isFounded, time, restart }) => {
  return (
    <Over found={isFounded}>
      <p>YOU HAVE FOUND WALDO!!!</p>
      <p>{time}</p>
      <ActionContainer>
        <Action onClick={restart}>RESTART</Action>
        <Action>SUBMIT</Action>
      </ActionContainer>
    </Over>
  )
}

export default GameOver
