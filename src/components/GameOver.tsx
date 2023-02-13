import React from 'react'
import styled from 'styled-components'

type Bool = true | false

const Over = styled.div<{ found: Bool }>`
  display: ${({ found }) => found ? 'block' : 'none'};
  position: fixed;
`

const GameOver: React.FC<{ isFound: boolean }> = ({ isFound }) => {
  return (
    <Over found={isFound}>Waldo is Found</Over>
  )
}

export default GameOver
