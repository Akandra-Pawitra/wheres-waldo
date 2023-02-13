import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  height: 25px;
  width: 25px;
  position: absolute;
  left: 540px;
  top: 550px;
`

const Hitbox: React.FC<{ found: () => void }> = ({ found }) => {
  return (
    <Box onClick={found}></Box>
  )
}

export default Hitbox
