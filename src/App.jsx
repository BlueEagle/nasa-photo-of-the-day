import React, { useState, useEffect } from "react";
import axios from 'axios';
import { API_KEY, API_URL } from './resources/api';
import Title from './components/Title';
import Details from './components/Details';
import styled from 'styled-components';


const AppDiv = styled.div`
  text-align: center;
`

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
    <AppDiv>
      <Title />
      <Details nasaData={data} />
    </AppDiv>
  );
}

export default App;
