import React, { useState } from 'react'
import styled from 'styled-components'
import waldo from './waldo.jpg'
import Start from './components/Start'
import Hitbox from './components/Hitbox'
import GameOver from './components/GameOver'
import { useStopwatch } from 'react-timer-hook'

const convertDigit = (arg: number): string => '0' + arg.toString()

const Timer = styled.div<{ isPlayed: boolean, isFounded: boolean }>`
  display: ${({ isPlayed, isFounded }) => isPlayed && !isFounded ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(200, 200, 200, 0.5);
  width: 160px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 40px;
`

const App: React.FC = () => {
  const [played, setPlayed] = useState(false)
  const [founded, setFounded] = useState(false)
  const [time, setTime] = useState('')
  const [playerName, setPlayerName] = useState('')
  const {
    minutes,
    seconds,
    start,
    pause,
    reset
  } = useStopwatch({ autoStart: false })
  const play = (): void => {
    setPlayed(true)
    start()
  }
  const found = (): void => {
    setFounded(true)
    pause()
    const mm: string = minutes < 10 ? '0' + minutes.toString() : minutes.toString()
    const ss: string = seconds < 10 ? '0' + seconds.toString() : seconds.toString()
    setTime(mm + ':' + ss)
  }
  const resetGame = (): void => {
    setPlayed(false)
    setFounded(false)
    reset()
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
    <div className="App" onClick={played ? () => {} : play}>
      <div className='background'>
        <img
          src={waldo}
          className={played && !founded ? '' : 'blur'}
        />
        <Hitbox found={founded ? () => {} : found}/>
      </div>
      <Start isPlayed={played}/>
      <Timer
        isPlayed={played}
        isFounded={founded}
      >
        {minutes < 10 ? convertDigit(minutes) : minutes}
        :
        {seconds < 10 ? convertDigit(seconds) : seconds}
      </Timer>
      <GameOver
        isFounded={founded}
        time={time}
        resetGame={resetGame}
        value={playerName}
        handleChange={handleChange} />
    </div>
  )
}

export default App
