import React from 'react'
import styled from 'styled-components'

const Modal = styled.div`
  width: 400px;
  height: 400px;
  position: fixed;
  top: calc((100vh / 2) - 200px);
  bottom: calc((100vh / 2) - 200px);
  right: calc((100vw / 2) - 200px);
  left: calc((100vw / 2) - 200px);
  border: 2px solid black;
`

const Start: React.FC<{ start: any }> = ({ start }) => {
  return (
    <Modal>Modal</Modal>
  )
}

export default Start
