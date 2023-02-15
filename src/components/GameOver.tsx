import React, { useState } from 'react'
import styled from 'styled-components'

const Over = styled.div<{ found: boolean }>`
  display: ${({ found }) => found ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: fixed;
  padding: 0 100px;
  top: 10vh;
  bottom: 10vh;
  right: 10vw;
  left: 10vw;
  font-size: 40px;
  font-weight: bolder;
  background-color: rgba(200, 200, 200, 0.5);
`

const TimeContainer = styled.div<{ submit: boolean }>`
  ${({ submit }) => submit
  ? 'display: grid; grid-template-columns: 1fr 1fr;'
  : 'display: flex'};
  justify-content: center;
  margin-top: -10px;
  margin-bottom: 40px;
`

const Name = styled.input<{ submit: boolean }>`
  display: ${({ submit }) => submit ? 'flex' : 'none'};
  width: 200px;
  justify-self: center;
  text-align: center;
  font-size: 30px;
  background-color: rgba(200, 200, 200, 0.7);
`

const ActionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Action = styled.button`
  background-color: rgba(200, 200, 200, 0.7);
  margin: auto;
  color: black;
  font-size: 30px;
`

const GameOver: React.FC<{
  isFounded: boolean
  time: string
  resetGame: () => void
}> = ({ isFounded, time, resetGame }) => {
  const [submitting, setSubmitting] = useState(false)
  const restart = (): void => {
    setSubmitting(false)
    resetGame()
  }
  const submit = (): void => { setSubmitting(true) }
  return (
    <Over found={isFounded}>
      <p>
        {submitting
          ? 'ENTER YOUR NAME'
          : 'YOU HAVE FOUND WALDO!!!'}
      </p>
      <TimeContainer submit={submitting}>
        <span>{time}</span>
        <Name type='text' submit={submitting} />
      </TimeContainer>
      <ActionContainer>
        <Action onClick={restart}>RESTART</Action>
        <Action onClick={submitting ? () => {} : submit}>SUBMIT</Action>
      </ActionContainer>
    </Over>
  )
}

export default GameOver
