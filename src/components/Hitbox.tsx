import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  height: 25px;
  width: 25px;
  position: absolute;
  left: 540px;
  top: 550px;
`

const Hitbox: React.FC<{ isFound: () => void }> = ({ isFound }) => {
  return (
    <Box onClick={isFound}></Box>
  )
}

export default Hitbox
