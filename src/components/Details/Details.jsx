import React from "react";
import styled from 'styled-components'
import Photo from "../Photo/Photo";


const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid gray;
    border-radius: 20px;
    background-color: lightgray;
    margin: 0 3%;
    padding: 3%;

    p {
      width: 85%;
    }
  }
`

function Details(props){
  const { nasaData } = props
  const { copyright, date, explanation, title } = nasaData

  return (
    <DetailsContainer>
      <div>
        <Photo nasaData={nasaData}/>
        <h1>{title}</h1>
        <h4>Date: {date}</h4>
        <p>{explanation}</p>
        <h6 className="copyright">{copyright}</h6>
      </div>
    </DetailsContainer>
  )
}

export default Details;