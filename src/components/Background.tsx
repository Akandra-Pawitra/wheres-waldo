import React from 'react'
import styled from 'styled-components'
import background from '../assets/background.jpg'
import Hitbox from './Hitbox'

const noop = (): void => {}

const Container = styled.div<{ isFounded: boolean }>`
  position: relative;
  top: ${({ isFounded }) => isFounded ? 0 : '60px'};
  width: 1366px;
`

const Image = styled.img<{ isPlayed: boolean }>`
  width: 1366px;
  filter: ${({ isPlayed }) => isPlayed ? 'none' : 'blur(16px)'};
`

const Background: React.FC<{
  isPlayed: boolean
  isFounded: boolean
  found: () => void
}> = ({ isPlayed, isFounded, found }) => {
  return (
    <Container isFounded={isFounded}>
      <Image src={background} isPlayed={isPlayed} />
      <Hitbox found={isFounded ? noop : found}/>
    </Container>
  )
}

export default Background
