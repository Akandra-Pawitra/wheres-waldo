import React, { useState } from 'react'
import waldo from './waldo.jpg'
import Start from './components/Start'

const App: React.FC = () => {
  const [play, setPlay] = useState(false)
  const start = (): void => { setPlay(true) }
  return (
    <div className="App">
      <img src={waldo} className={play ? '' : 'blur'} />
      <Start start={start}/>
    </div>
  )
}

export default App
