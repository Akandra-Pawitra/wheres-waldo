import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import fireStoreApp from './Firebase'
import {
  getFirestore,
  collection,
  getDoc,
  doc
} from 'firebase/firestore'

// Image source
// https://www.pixiv.net/en/artworks/82842393

const db = getFirestore(fireStoreApp)
export const userRef = collection(db, 'UserScore')
export const rankRef = doc(db, 'UserRank', 'Leaderboard')

const snap = await getDoc(rankRef)
const rankPlaceholder = [
  { name: 'computer', time: 600, score: '10:00' },
  { name: 'computer', time: 600, score: '10:00' },
  { name: 'computer', time: 600, score: '10:00' },
  { name: 'computer', time: 600, score: '10:00' },
  { name: 'computer', time: 600, score: '10:00' },
  { name: 'computer', time: 600, score: '10:00' },
  { name: 'computer', time: 600, score: '10:00' },
  { name: 'computer', time: 600, score: '10:00' },
  { name: 'computer', time: 600, score: '10:00' }
]

let leaderboard: Player[] = []
if (snap.exists()) {
  const obj = snap.data()
  obj.rank.length === 0
    ? leaderboard = rankPlaceholder
    : leaderboard = obj.rank
} else {
  leaderboard = rankPlaceholder
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <App leaderboard={leaderboard} />
  </React.StrictMode>
)
