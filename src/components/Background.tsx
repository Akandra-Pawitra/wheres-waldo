import React from 'react'
import styled from 'styled-components'
import waldo from '../waldo.jpg'
import Hitbox from './Hitbox'

const noop = (): void => {}

const Container = styled.div`
  position: static;
  width: 1366px;
  height: 900px;
`

const Background: React.FC<{
  played: boolean
  founded: boolean
  found: () => void
}> = ({ played, founded, found }) => {
  return (
    <Container>
      <img
        src={waldo}
        width='1366px'
        height='900px'
        className={played && !founded ? '' : 'blur'}
      />
      <Hitbox found={founded ? noop : found}/>
    </Container>
  )
}

export default Background
