import React, { useState } from 'react'
import waldo from './waldo.jpg'
import Start from './components/Start'
import Hitbox from './components/Hitbox'
import GameOver from './components/GameOver'
import { useStopwatch } from 'react-timer-hook'

const App: React.FC = () => {
  const [played, setPlayed] = useState(false)
  const [founded, setFounded] = useState(false)
  const [time, setTime] = useState('')
  const {
    minutes,
    seconds,
    start,
    pause
  } = useStopwatch({ autoStart: false })
  const play = (): void => {
    setPlayed(true)
    start()
  }
  const found = (): void => {
    setFounded(true)
    pause()
    let mm: string = minutes.toString()
    let ss: string = seconds.toString()
    if (mm.length === 1) mm = '0' + mm
    if (ss.length === 1) ss = '0' + ss
    setTime(`${mm}:${ss}`)
  }
  return (
    <div className="App" onClick={played ? () => {} : play}>
      <div className='background'>
        <img src={waldo} className={played ? '' : 'blur'} />
        <Hitbox found={founded ? () => {} : found}/>
      </div>
      <Start isPlayed={played}/>
      <div>{minutes}:{seconds}</div>
      <GameOver isFounded={founded} time={time} />
    </div>
  )
}

export default App
