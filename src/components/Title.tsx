import React from 'react'
import styled from 'styled-components'

const TitleText = styled.p`
  margin-top: -100px;
`

const Title: React.FC<{
  submitting: boolean
  rank: boolean
}> = ({ submitting, rank }) => {
  return (
    <TitleText>
      {submitting
        ? (rank ? 'LEADERBOARD' : 'ENTER YOUR NAME')
        : 'YOUR SCORE:'}
    </TitleText>
  )
}

export default Title
