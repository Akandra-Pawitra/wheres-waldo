import React from 'react'

const Title: React.FC<{
  submitting: boolean
  rank: boolean
}> = ({ submitting, rank }) => {
  return (
    <p>
        {submitting
          ? (rank ? 'LEADERBOARD' : 'ENTER YOUR NAME')
          : 'YOU HAVE FOUND WALDO!!!'}
      </p>
  )
}

export default Title
