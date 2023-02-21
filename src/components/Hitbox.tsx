import React from 'react'
import styled from 'styled-components'

const Contender = styled.div`
  position: absolute;
  border: 1px solid red;
  left: 520px;
  top: 480px;
  height: 160px;
  width: 110px;
`

const FiveSeven = styled.div`
  position: absolute;
  border: 1px solid red;
  left: 910px;
  top: 200px;
  width: 50px;
  height: 160px;
`

const Welrodmk2 = styled.div`
  position: absolute;
  border: 1px solid red;
  left: 510px;
  top: 80px;
  width: 30px;
  height: 90px;
`

const Hitbox: React.FC<{ found: () => void }> = ({ found }) => {
  return (
    <div>
      <Contender onClick={found}></Contender>
      <FiveSeven onClick={found}></FiveSeven>
      <Welrodmk2 onClick={found}></Welrodmk2>
    </div>
  )
}

export default Hitbox
