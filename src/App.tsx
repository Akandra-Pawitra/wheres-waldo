import React, { useState } from 'react'
import Start from './components/Start'
import GameOver from './components/GameOver'
import { useStopwatch } from 'react-timer-hook'
import Selection from './components/Selection'

const App: React.FC<{ leaderboard: Player[] }> = ({ leaderboard }) => {
  const [played, setPlayed] = useState(false)
  const [selecting, setSelecting] = useState(false)
  const [foundContender, setFoundContender] = useState(false)
  const [foundFiveSeven, setFoundFiveSeven] = useState(false)
  const [foundWelrodMk2, setFoundWelrodMk2] = useState(false)
  const [founded, setFounded] = useState(false)
  const [time, setTime] = useState('')
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const {
    minutes,
    seconds,
    start,
    pause,
    reset
  } = useStopwatch({ autoStart: false })
  const play = (e: React.MouseEvent): void => {
    if (!selecting) {
      setX(e.clientX + window.scrollX)
      setY(e.clientY + window.scrollY)
      setSelecting(true)
    }
  }
  const startGame = (): void => {
    setPlayed(true)
    start()
  }
  const found = (): void => {
    setPlayed(false)
    setFounded(true)
    pause()
    const mm: string = minutes < 10 ? '0' + minutes.toString() : minutes.toString()
    const ss: string = seconds < 10 ? '0' + seconds.toString() : seconds.toString()
    setTime(mm + ':' + ss)
  }
  const resetGame = (): void => {
    setPlayed(false)
    setFounded(false)
    setFoundContender(false)
    setFoundFiveSeven(false)
    setFoundWelrodMk2(false)
    reset()
  }
  return (
    <div className="App">
      <Start
        isPlayed={played}
        isFounded={founded}
        isFoundContender={foundContender}
        isFoundFiveSeven={foundFiveSeven}
        isFoundWelrodMk2={foundWelrodMk2}
        minutes={minutes}
        seconds={seconds}
        startGame={startGame}
        found={found}
        play={play} />
      <Selection
        isPlayed={played}
        isSelecting={selecting}
        isFounded={founded}
        isFoundContender={foundContender}
        isFoundFiveSeven={foundFiveSeven}
        isFoundWelrodMk2={foundWelrodMk2}
        found={found}
        setFoundContender={setFoundContender}
        setFoundFiveSeven={setFoundFiveSeven}
        setFoundWelrodMk2={setFoundWelrodMk2}
        setSelecting={setSelecting}
        x={x} y={y} />
      <GameOver
        isFounded={founded}
        time={time}
        leaderboard={leaderboard}
        resetGame={resetGame} />
    </div>
  )
}

export default App
