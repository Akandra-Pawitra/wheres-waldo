import React from 'react'
import styled from 'styled-components'

const TimeContainer = styled.div<{ submit: boolean, rank: boolean }>`
  ${({ submit, rank }) => submit
  ? (rank ? 'display: none;' : 'display: grid; grid-template-columns: 1fr 1fr;')
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

const Score: React.FC<{
  submitting: boolean
  rank: boolean
  time: string
  playerName: string
  handleChange: (e: any) => void
}> = ({ submitting, rank, time, playerName, handleChange }) => {
  return (
    <TimeContainer submit={submitting} rank={rank}>
        <span>{time}</span>
        <Name
          type='text'
          value={playerName}
          onChange={handleChange}
          submit={submitting} />
      </TimeContainer>
  )
}

export default Score
