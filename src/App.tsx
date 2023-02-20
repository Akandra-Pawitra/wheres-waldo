import React, { useState } from 'react'
import Start from './components/Start'
import GameOver from './components/GameOver'
import { useStopwatch } from 'react-timer-hook'
import Background from './components/Background'
import Timer from './components/Timer'
import Selection from './components/Selection'

const App: React.FC<{ leaderboard: Player[] }> = ({ leaderboard }) => {
  const [played, setPlayed] = useState(false)
  const [selecting, setSelecting] = useState(false)
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
    if (!founded) {
      // don't use (played && !selecting), it will trigger start()
      if (played) {
        if (!selecting) {
          setX(e.clientX + window.scrollX)
          setY(e.clientY + window.scrollY)
          setSelecting(true)
        }
      } else {
        setPlayed(true)
        start()
      }
    }
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
    <div className="App" onMouseDown={play}>
      <Background
        played={played}
        founded={founded}
        found={found} />
      <Start isPlayed={played}/>
      <Selection
        played={played}
        selecting={selecting}
        founded={founded}
        setSelecting={setSelecting}
        x={x} y={y} />
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
