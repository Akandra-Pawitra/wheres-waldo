import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const leaderboard: Player[] = [
  { name: 'name1111', time: 1, score: '00:01' },
  { name: 'name1112', time: 2, score: '00:02' },
  { name: 'name1113', time: 3, score: '00:03' },
  { name: 'name1114', time: 4, score: '00:04' },
  { name: 'name1115', time: 5, score: '00:05' },
  { name: 'name1116', time: 6, score: '00:06' },
  { name: 'name1117', time: 7, score: '00:07' },
  { name: 'name1118', time: 8, score: '00:08' },
  { name: 'name1119', time: 9, score: '00:09' }
]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <App leaderboard={leaderboard} />
  </React.StrictMode>
)
