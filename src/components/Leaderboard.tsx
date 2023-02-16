import React from 'react'
import styled from 'styled-components'

const RankGrid = styled.div<{ rank: boolean }>`
  ${({ rank }) => rank
    ? (`display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 100px`)
    : 'display: none;'
  }
`

const RankCell = styled.div`
  display: grid;
  grid-template-columns: 30% 60%;
  font-size: 30px;
  text-align: center;
`

const Leaderboard: React.FC<{
  leaderboard: Player[]
  rank: boolean
}> = ({ leaderboard, rank }) => {
  const grid1 = (leaderboard.slice(0, 5)).map(player => {
    return (
      <RankCell key={leaderboard.indexOf(player)}>
        <span>{player.score}</span>
        <span>{player.name}</span>
      </RankCell>
    )
  })
  const grid2 = (leaderboard.slice(5, 10)).map(player => {
    return (
      <RankCell key={leaderboard.indexOf(player)}>
        <span>{player.score}</span>
        <span>{player.name}</span>
      </RankCell>
    )
  })

  return (
    <RankGrid rank={rank}>
      <div>{grid1}</div>
      <div>{grid2}</div>
    </RankGrid>
  )
}

export default Leaderboard
