import React from "react";
import Photo from "../Photo/Photo";
import "./Details.css"

function Details(props){
  const { nasaData } = props
  const { copyright, date, explanation, title } = nasaData

  return (
    <div className="details">
      <div className="container">
        <Photo nasaData={nasaData}/>
        <h1>{title}</h1>
        <h4>Date: {date}</h4>
        <p className="explanation">{explanation}</p>
        <h6 className="copyright">{copyright}</h6>
      </div>
    </div>
  )
}

export default Details;