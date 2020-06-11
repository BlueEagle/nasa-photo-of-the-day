import React from "react";
import styled from 'styled-components';

const NasaImage = styled.img`
  width: 90%;
  border-radius: 20px;
`

function Photo(props){
  
  console.log(props.nasaData.hdurl)

  return (
    <NasaImage src={props.nasaData.hdurl} alt={props.title} />
  )
}

export default Photo;