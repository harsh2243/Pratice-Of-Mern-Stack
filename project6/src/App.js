

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Mybody from './components/Mybody';
import Navbar from './components/Navbar'
import Navbar1 from './components/Navbar1'
import Photo from './components/Photo'
import Box from './components/Box'
import Output from './components/Output';



let App = () => {
  return (
    <div>
      <Navbar1></Navbar1>
      <Navbar></Navbar>
      <Mybody></Mybody>
      <Box></Box>
      <Photo></Photo>
      
        <Output></Output>


      
    </div>
  )
}

export default App

