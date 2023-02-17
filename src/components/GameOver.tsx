import React, { useState } from 'react'
import styled from 'styled-components'
import Submit from './Submit'
import Time from './Time'
import Title from './Title'
import Leaderboard from './Leaderboard'
import { addDoc, updateDoc } from 'firebase/firestore'
import { userRef, rankRef } from '../index'

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
  leaderboard: Player[]
}> = ({ isFounded, time, resetGame, leaderboard }) => {
  const [submitting, setSubmitting] = useState(false)
  const [playerName, setPlayerName] = useState('')
  const [rank, setRank] = useState(false)
  const [playerRank, setPlayerRank] = useState(leaderboard)
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
  const submitScore = (): void => {
    const arr = playerRank
    const playerTime = parseInt((time[0] + time[1])) * 60 + parseInt((time[3] + time[4]))
    const player: Player = {
      name: playerName,
      time: playerTime,
      score: time
    }

    let [isTopRank, place] = [false, 0]
    for (let i = 0; i < 9; i++) {
      if (player.time <= playerRank[i].time) {
        isTopRank = true
        player.time === playerRank[i].time
          ? place = i + 1
          : place = i
        break
      } else continue
    }
    if (isTopRank) {
      arr.splice(place, 0, player)
    } else arr.push(player)

    setPlayerRank(arr)
    setRank(true)

    addDoc(userRef, player).then(
      () => {}
    ).catch(error => {
      console.log(error)
    })

    updateDoc(rankRef, { rank: arr }).then(
      () => {}
    ).catch(error => {
      console.log(error)
    })
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
        submitScore={submitScore}
        setSubmitting={setSubmitting} />
      <Leaderboard
        leaderboard={leaderboard}
        rank={rank} />
    </Over>
  )
}

export default GameOver
