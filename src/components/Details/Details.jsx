import React from "react";
import styled from 'styled-components'
import Photo from "../Photo/Photo";
// import "./Details.css"


const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  border-radius: 20px;
  background-color: lightgray;
  margin: 0 3%;
  padding: 3%;
`
const Explanation = styled.p`
  width: 85%;
`

function Details(props){
  const { nasaData } = props
  const { copyright, date, explanation, title } = nasaData

  return (
    <DetailsContainer>
      <Container>
        <Photo nasaData={nasaData}/>
        <h1>{title}</h1>
        <h4>Date: {date}</h4>
        <Explanation>{explanation}</Explanation>
        <h6 className="copyright">{copyright}</h6>
      </Container>
    </DetailsContainer>
  )
}

export default Details;