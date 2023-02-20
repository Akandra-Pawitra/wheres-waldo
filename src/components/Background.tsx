import React from 'react'
import styled from 'styled-components'
import background from '../assets/background.jpg'
import Hitbox from './Hitbox'

const noop = (): void => {}

const Container = styled.div`
  position: static;
  width: 1366px;
`

const Image = styled.img<{ played: boolean, founded: boolean }>`
  width: 1366px;
  filter: ${({ played, founded }) => {
    return (played && !founded ? 'none' : 'blur(16px)')
  }};
`

const Background: React.FC<{
  played: boolean
  founded: boolean
  found: () => void
}> = ({ played, founded, found }) => {
  return (
    <Container>
      <Image src={background} played={played} founded={founded} />
      <Hitbox found={founded ? noop : found}/>
    </Container>
  )
}

export default Background
