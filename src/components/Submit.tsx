import React from 'react'
import styled from 'styled-components'

const ActionContainer = styled.div<{ rank: boolean }>`
  ${({ rank }) => rank
    ? 'display: none;'
    : 'display: grid; grid-template-columns: 1fr 1fr;'
  }
  position: relative;
  top: 100px;
`

const Action = styled.button`
  background-color: rgba(200, 200, 200, 0.7);
  margin: auto;
  color: black;
  font-size: 30px;
`

const Submit: React.FC<{
  rank: boolean
  submitting: boolean
  playerName: string
  restart: () => void
  submitScore: () => void
  setSubmitting: (arg: boolean) => void
}> = ({
  rank,
  submitting,
  playerName,
  restart,
  submitScore,
  setSubmitting
}) => {
  const validateUserName = (): void => {
    if (
      playerName.length === 8 &&
      playerName.match(/^[A-Za-z0-9]+$/) !== null) {
      submitScore()
    } else {
      alert('Username must be Alphanumeric and 8 character long')
    }
  }
  const showNameInput = (): void => { setSubmitting(true) }
  return (
    <ActionContainer rank={rank}>
        <Action onClick={restart}>RESTART</Action>
        <Action onClick={submitting ? validateUserName : showNameInput} >
            SUBMIT
        </Action>
      </ActionContainer>
  )
}

export default Submit
