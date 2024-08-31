import logo from './logo.svg';
import './App.css';
import axios from 'axios';
const {useState}= require("react")




let App=()=> {
 let [item ,setItem] =useState();
  let onIdchangeHandler=(event)=>{
     setItem({...item,id:  event.target.value})
  }
  let onNamechangeHandler=(event)=>{
    setItem({...item,name: event.target.value})
    
  }
  let onPricechangeHandler=(event)=>{
    setItem({...item,price: event .target.value})
    
  }
  let onSizechangeHandler=(event)=>{
    setItem({...item,size: event.target.value})
    
  }

  let onColorchangeHandler=(event)=>{
    setItem({...item,color: event.target.value})
    
    
  }
  let onImagechangeHandler=(event)=>{
    setItem({...item,image: event.target.value})
    
  }

  let sendItem= async()=>{
     console.log(item);
    await axios.get(
    //  "https://127.0.0.1:8000 /addUser ",
    "http://localhost:4000/addProducts",
      item
        
     // .then((response)=>{
       //console.log(response);
   //   })
     )
  }

  // useEffect(()=>{

  // })
  return (
    <div>

      <div className='form'>
        <h1>Add product</h1>
        <input placeholder='item Id' onChange={onIdchangeHandler}></input>
        <input placeholder='Item Name' onChange={onNamechangeHandler}></input>
        <input placeholder='Item Price' onChange={onPricechangeHandler}></input>
        <input placeholder='item Size' onChange={onSizechangeHandler}></input>
        <input placeholder='item Color' onChange={onColorchangeHandler}></input>
        <input placeholder='item Image' onChange={onImagechangeHandler}></input>
       
        <button onClick={sendItem}>Add Item</button>
      </div>
      
    </div>
  );
}

export default App;



// import axios from "axios";
// import "./App.css";
// const { useState, useEffect } = require("react")

// let App=()=>{
//  let [item,setItem]=useState();


// let onIdChangeHandler=(event)=>{
// setItem({...item,id: event.target.value});
// }
// let onNameChangeHandler=(event)=>{
// setItem({...item,name: event.target.value})
// }
// let onPriceChangeHandler=(event)=>{
// setItem({...item,price: event.target.value})
// }
// let onSizeChangeHandler=(event)=>{
//   setItem({...item,size: event.target.value})
//   }
// let onColorChangeHandler=(event)=>{
// setItem({...item,color:event.target.value});
// }

// let onImageChangeHandler=(event)=>{
// setItem({...item,image:event.target.value})
// }



// let sendItem=async ()=>{

//   // await axios.post("http://localhost:9000/addProduct",item).then((res,err)=>{
//   //   console.log(res.data);
//   // });

//   const res=await axios.post("http://localhost:4000/addProduct",item);
// console.log(res.data);
// }





// return <div>



// <div className="form">

// <h1>Add Product</h1>
// <input placeholder="Item ID" onChange={onIdChangeHandler}></input> 
// <input placeholder="Item Name" onChange={onNameChangeHandler}></input> 
// <input placeholder="Item Price" onChange={onPriceChangeHandler}></input> 
// <input placeholder="Item Size" onChange={onSizeChangeHandler}></input> 
// <input placeholder="Item Colour" onChange={onColorChangeHandler}></input> 
// <input placeholder="Item Image" onChange={onImageChangeHandler}></input> 
// <button onClick={sendItem}>Add Item</button>


// </div>

// </div>

// }
// export default App;