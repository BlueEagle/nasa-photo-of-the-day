import React from "react";
import "./Photo.css";

function Photo(props){
  
  console.log(props.nasaData.hdurl)

  return (
    <img className="nasaImage" src={props.nasaData.hdurl} alt={props.title} />
  )
}

export default Photo;