import React from 'react'
import styled from 'styled-components'
import Background from './Background'
import StatusBar from './StatusBar'
import contender from '../assets/contender_full.png'
import fiveseven from '../assets/fiveseven_full.png'
import welrodmk2 from '../assets/welrodmk2_full.png'

const Container = styled.div`
  position: static;
`

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
`

const ProfileImage = styled.img`
  width: 300px;
`

const ProfileName = styled.p`
  margin: 0;
`

const ClickStart = styled.div<{ isPlayed: boolean, isFounded: boolean }>`
  display: ${({ isPlayed, isFounded }) => isPlayed || isFounded ? 'none' : 'flex'};
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: fixed;
  top: 60px;
  bottom: 0;
  right: 0;
  left: 0;
  font-size: 40px;
  font-weight: bolder;
  background-color: rgba(200, 200, 200, 0.5);
  z-index: 1;
`

const Profile: React.FC = () => {
  return (
    <ProfileWrapper>
      <span>
        <ProfileImage src={contender} />
        <ProfileName>Contender</ProfileName>
      </span>
      <span>
        <ProfileImage src={fiveseven} />
        <ProfileName>Five Seven</ProfileName>
      </span>
      <span>
        <ProfileImage src={welrodmk2} />
        <ProfileName>Welrod MkII</ProfileName>
      </span>
    </ProfileWrapper>
  )
}

const Start: React.FC<{
  isPlayed: boolean
  isFounded: boolean
  isFoundContender: boolean
  isFoundFiveSeven: boolean
  isFoundWelrodMk2: boolean
  minutes: number
  seconds: number
  found: () => void
}> = ({
  isPlayed,
  isFounded,
  isFoundContender,
  isFoundFiveSeven,
  isFoundWelrodMk2,
  minutes,
  seconds,
  found
}) => {
  return (
    <Container>
      <StatusBar
        isPlayed={isPlayed}
        isFounded={isFounded}
        isFoundContender={isFoundContender}
        isFoundFiveSeven={isFoundFiveSeven}
        isFoundWelrodMk2={isFoundWelrodMk2}
        minutes={minutes}
        seconds={seconds} />
      <ClickStart isPlayed={isPlayed} isFounded={isFounded}>
        <p>CLICK ANYWHERE TO START</p>
        <Profile />
      </ClickStart>
      <Background
        isPlayed={isPlayed}
        isFounded={isFounded}
        found={found} />
    </Container>
  )
}

export default Start
