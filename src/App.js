import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import { API_KEY, API_URL } from './api'
import Title from './components/Title/Title'
import Details from './components/Details/Details'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}?api_key=${API_KEY}`)
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <div className="App">
      <Title />
      <Details nasaData={data} />
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
    </div>
  );
}

export default App;
