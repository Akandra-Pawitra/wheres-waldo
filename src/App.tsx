import React, { useState } from 'react'
import waldo from './waldo.jpg'
import Start from './components/Start'

const App: React.FC = () => {
  const [started, setStarted] = useState(false)
  const start = (): void => { setStarted(true) }
  return (
    <div className="App" onClick={start}>
      <img src={waldo} className={started ? '' : 'blur'} />
      <Start isStarted={started}/>
    </div>
  )
}

export default App
