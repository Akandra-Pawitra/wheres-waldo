import React, { useState } from 'react'
import waldo from './waldo.jpg'
import Start from './components/Start'
import Hitbox from './components/Hitbox'
import GameOver from './components/GameOver'

const App: React.FC = () => {
  const [started, setStarted] = useState(false)
  const [found, setFound] = useState(false)
  const start = (): void => { setStarted(true) }
  const isFound = (): void => { setFound(true) }
  return (
    <div className="App" onClick={start}>
      <div className='background'>
        <img src={waldo} className={started ? '' : 'blur'} />
        <Hitbox isFound={isFound}/>
      </div>
      <Start isStarted={started}/>
      <GameOver isFound={found} />
    </div>
  )
}

export default App
