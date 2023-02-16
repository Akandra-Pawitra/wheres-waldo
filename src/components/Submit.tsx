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
  restart: () => void
  submitScore: () => void
  setSubmitting: (arg: boolean) => void
}> = ({
  rank,
  submitting,
  restart,
  submitScore,
  setSubmitting
}) => {
  return (
    <ActionContainer rank={rank}>
        <Action onClick={restart}>RESTART</Action>
        <Action onClick={submitting
          ? () => { submitScore() }
          : () => { setSubmitting(true) }}>
            SUBMIT
        </Action>
      </ActionContainer>
  )
}

export default Submit
