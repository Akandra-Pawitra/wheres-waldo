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

const GameOver: React.FC<{ isFounded: boolean, time: string }> = ({ isFounded, time }) => {
  return (
    <Over found={isFounded}>
      <p>You have found Waldo!!!</p>
      <p>{time}</p>
    </Over>
  )
}

export default GameOver
