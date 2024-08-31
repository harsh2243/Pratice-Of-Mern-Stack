
// import './App.css';
import React, { useEffect } from 'react'
import axios from 'axios'

 

// // const getData=(url)=>
// //     {
// //       fetch (url)
// //       .then(response=> response.json())
// //       //.then((data)=>console.log(data))er
// //       .catch((error)=> {
// //         console.log('Error')
// //       } );
// //     }





 const App = () => {
    const API='https://jsonplaceholder.typicode.com';
    
  const getData=(url)=>{
     axios.get(url)
     .then((res)=>{
      console.log('axios Response',res.data)
    })
     .catch((err)=>{
       console.log(err)
     })
  }
 
  
   useEffect( ()=>{
    getData(`${API}/users`)
 } ,[]);

 return (
    <div>
        <h1>harshvardhan</h1>
    </div>
 )
 }

 export default App;