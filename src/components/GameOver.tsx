import React, { useState } from 'react'
import styled from 'styled-components'
import Submit from './Submit'
import Time from './Time'
import Title from './Title'

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

const GameOver: React.FC<{
  isFounded: boolean
  time: string
  resetGame: () => void
}> = ({ isFounded, time, resetGame }) => {
  const [submitting, setSubmitting] = useState(false)
  const [playerName, setPlayerName] = useState('')
  const [rank, setRank] = useState(false)
  const restart = (): void => {
    setSubmitting(false)
    resetGame()
  }
  const handleChange = (event: any): void => {
    if (playerName.length < 8) {
      const val = event.target.value
      const char = val[val.length - 1]
      if ((char.match(/^[a-z0-9]+$/i)) !== null) {
        setPlayerName(val)
      }
    }
  }
  return (
    <Over found={isFounded}>
      <Title submitting={submitting} rank={rank} />
      <Time
        submitting={submitting}
        rank={rank}
        time={time}
        playerName={playerName}
        handleChange={handleChange} />
      <Submit
        rank={rank}
        submitting={submitting}
        restart={restart}
        setRank={setRank}
        setSubmitting={setSubmitting} />
    </Over>
  )
}

export default GameOver
