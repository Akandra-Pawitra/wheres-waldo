import React, { useState } from 'react'
import Start from './components/Start'
import GameOver from './components/GameOver'
import { useStopwatch } from 'react-timer-hook'
import Background from './components/Background'
import Timer from './components/Timer'

const noop = (): void => {}

const App: React.FC<{ leaderboard: Player[] }> = ({ leaderboard }) => {
  const [played, setPlayed] = useState(false)
  const [founded, setFounded] = useState(false)
  const [time, setTime] = useState('')
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
  return (
    <div className="App" onClick={played ? noop : play}>
      <Background
        played={played}
        founded={founded}
        found={found} />
      <Start isPlayed={played}/>
      <Timer
        played={played}
        founded={founded}
        minutes={minutes}
        seconds={seconds} />
      <GameOver
        isFounded={founded}
        time={time}
        leaderboard={leaderboard}
        resetGame={resetGame} />
    </div>
  )
}

export default App
