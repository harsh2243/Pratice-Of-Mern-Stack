// // Day 2
// import Output from "./Component/day2"
// let App=()=>{
//   let props=[
//     {
//       image:"https://th.bing.com/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?w=220&h=220&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//       id:"Id:-1234",
//       name:"Name:-Pooja",
//       age:"Age:-18",
//       address:"City:-Ranchi"
      

      
//     },
//     {
//       image:"https://th.bing.com/th/id/OIP.OR6j_dwro-MvpN8v1L6cKQHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//       id: "Id:-1236",
//       name:"Name:-Ankit",
//       age:"Age:-19",
//       address:" State:-Bihar"

// },
// {
//   image:"https://th.bing.com/th/id/OIP.4oYqJqInuQd2TAlPPdggLgHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//   id:"Id:-1238",
//   name:"Name:-Piyush",
//   age:"Age:-20",
//   address:"City:-Chandigarh  " 

// },

// ]
 
//   return<div>
//     {
//       props.map((afnan)=>
//       {
//         return <Output image={afnan.image} name={afnan.name} id={afnan.id}   age={afnan.age} address={afnan.address} ></Output>
//       })
//     }
    
//   </div>
// }
// export default App;




// import Output from "./Component/output";
// import Input from "./Component/input";
// import "./App.css";
// let App =()=>{

  
// let  props=[
//     {
//    id:1234,
//     name:"Saloni",
//     image:"https://tse1.mm.bing.net/th?id=OIP.GlIuUj-GYrRL_G8WvZ3YagHaHw&pid=Api&rs=1&c=1&qlt=95&h=220",
//     address:"#589 Sec 4 , Urban Estate, Karnal"
//   },
//     {
//    id:1235,
//     name:"Pranshant",
//     image:"https://tse1.mm.bing.net/th?id=OIP.GlIuUj-GYrRL_G8WvZ3YagHaHw&pid=Api&rs=1&c=1&qlt=95&h=220",
//     address:"#589 Sec 4 , Urban Estate, Karnal"
//   },
//   {
//     id:1236,
//      name:"Arpit",
//      image:"https://tse1.mm.bing.net/th?id=OIP.GlIuUj-GYrRL_G8WvZ3YagHaHw&pid=Api&rs=1&c=1&qlt=95&h=220",
//     address:"#589 Sec 4 , Urban Estate, Karnal"

//    },
//    {
//     id:1238,
//      name:"Sandeep",
//      image:"https://tse1.mm.bing.net/th?id=OIP.GlIuUj-GYrRL_G8WvZ3YagHaHw&pid=Api&rs=1&c=1&qlt=95&h=220",
//     address:"#589 Sec 4 , Urban Estate, Karnal"

//    }
   
//   ]
  
// let onPropsAdd=(row)=>
// {
//   console.log(row);
// }

//   return <div>
    
 
//  <div className="container">
//  {

// props.map((row)=>{

// return <Output id={row.id} name={row.name} image={row.image} address={row.address} ></Output>

// })

//  }
// </div>
// <div className="inputform">
// <Input onPropsAdd={onPropsAdd}></Input>
// </div>
//   </div>
// }
// export default App;





// import Output from "./Component/output";
// import Input from "./Component/input";
// import Header from "./Component/header";
// import "./App.css";
// import { useState } from "react";
// let App =()=>{

   
// let  [props,setProps]=useState([
//     {
//    id:1234,
//     name:"Saloni",
//     image:"https://tse1.mm.bing.net/th?id=OIP.GlIuUj-GYrRL_G8WvZ3YagHaHw&pid=Api&rs=1&c=1&qlt=95&h=220",
//     address:"#589 Sec 4 , Urban Estate, Karnal"
//   },
//     {
//    id:1235,
//     name:"Pranshant",
//     image:"https://tse1.mm.bing.net/th?id=OIP.GlIuUj-GYrRL_G8WvZ3YagHaHw&pid=Api&rs=1&c=1&qlt=95&h=220",
//     address:"#589 Sec 4 , Urban Estate, Karnal"
//   },
//   {
//     id:1236,
//      name:"Arpit",
//      image:"https://tse1.mm.bing.net/th?id=OIP.GlIuUj-GYrRL_G8WvZ3YagHaHw&pid=Api&rs=1&c=1&qlt=95&h=220",
//     address:"#589 Sec 4 , Urban Estate, Karnal"

//    },
//    {
//     id:1238,
//      name:"Sandeep",
//      image:"https://tse1.mm.bing.net/th?id=OIP.GlIuUj-GYrRL_G8WvZ3YagHaHw&pid=Api&rs=1&c=1&qlt=95&h=220",
//     address:"#589 Sec 4 , Urban Estate, Karnal"

//    }
   
//   ]);
  
// let onPropsAdd=(row)=>
// {
//   setProps([...props,row])
//   console.log(row);
// }
// let onPropsRemove=(id)=>
// {
//   console.log(id)
//   props=props.filter((row)=>{
//     return  row.id!=id;
//   })
//   setProps(props)
// }
// let onPropsUpdate=(nrow)=>
// {
//   props=props.filter((row)=>{
//     return  row.id!=nrow.id;
//   })
//   setProps([...props,nrow])
// }


//   return <div>
//     <Header/>
 
//  <div className="container">
//  {

// props.map((row)=>{

// return <Output onPropsRemove={onPropsRemove} id={row.id} name={row.name} image={row.image} address={row.address} ></Output>

// })

//  }
// </div>

// <div className="inputform">
// <Input onPropsAdd={onPropsAdd}  onPropsUpdate={onPropsUpdate} ></Input>
// </div>
//   </div>
// }
// export default App;



// import React {Component} from "react";
// import './App.css';
// import Pratice from "./Component/pratice";


// let App=()=>{
//   return{
    
//   }
   
// export default App;




// import pra from './Component/pratice';
// import "./App.css";
// let App =()=>{
//   return(
//     <pratice></pratice>
//   );
// }
// export default App;



import './App.css';
import Pratice  from '.Component/pratice';

function App() {
  return (
    <div className="App">
      <Output></Output>
      <Pratice></Pratice>
    </div>
  );
}

export default App;