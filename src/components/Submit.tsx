import React from 'react'
import styled from 'styled-components'

const ActionContainer = styled.div<{ rank: boolean }>`
  ${({ rank }) => rank
    ? 'display: none;'
    : 'display: grid; grid-template-columns: 1fr 1fr;'
}
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
  setRank: (arg: boolean) => void
  setSubmitting: (arg: boolean) => void
}> = ({
  rank,
  submitting,
  restart,
  setRank,
  setSubmitting
}) => {
  return (
    <ActionContainer rank={rank}>
        <Action onClick={restart}>RESTART</Action>
        <Action onClick={submitting
          ? () => { setRank(true) }
          : () => { setSubmitting(true) }}>
            SUBMIT
        </Action>
      </ActionContainer>
  )
}

export default Submit
