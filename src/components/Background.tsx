import React from 'react'
import styled from 'styled-components'
import background from '../assets/background.jpg'
import Hitbox from './Hitbox'

const noop = (): void => {}

const Container = styled.div`
  position: static;
  width: 1366px;
`

const Nav = styled.div`
  height: 100px;
`

const Image = styled.img<{ isPlayed: boolean }>`
  width: 1366px;
  filter: ${({ isPlayed }) => isPlayed ? 'none' : 'blur(16px)'};
`

const Background: React.FC<{
  isPlayed: boolean
  founded: boolean
  found: () => void
}> = ({ isPlayed, founded, found }) => {
  return (
    <Container>
      <Nav />
      <Image src={background} isPlayed={isPlayed} />
      <Hitbox found={founded ? noop : found}/>
    </Container>
  )
}

export default Background
