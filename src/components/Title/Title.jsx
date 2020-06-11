import React from "react";
import styled from 'styled-components'

const TitleNav = styled.header`
  background-color: lightblue;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3%;
`

function Title(){
  return (
    <TitleNav>
      <h1>NASA Photo of The Day</h1>
    </TitleNav>
  )
}

export default Title;