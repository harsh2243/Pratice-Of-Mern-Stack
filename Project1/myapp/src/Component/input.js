// import "../css/input.css";

// let input=()=>{
//     <div className="form">
//         <input type="text" palceholder="Id"></input>
//         <input type="text" palceholder="Id"></input> 
//         <input type="text" palceholder="Id"></input>
//         <input type="text" palceholder="Id"></input>
//     </div>

// }
// export default input();

// import { useState } from "react";
// import "../Css/input.css"; 
// let Input=(props)=>{



// let [row,setRow]= useState({
//     id:"",
//      name:"",
//      image:"",
//      address:""
//    });

// let onIdChangeHnadler=(event)=>{
//     setRow(
//        { ...row,id:event.target.value}
//     )
// console.log(row);
// }
// let onDpChangeHnadler=(event)=>{
//     setRow(
//         { ...row,image:event.target.value}
//      )
//  console.log(row);
//     }
//     let onNameChangeHnadler=(event)=>{
//         setRow(
//             { ...row,name:event.target.value}
//          )
//      console.log(row);
//         }
//         let onAddressChangeHnadler=(event)=>{
//             setRow(
//                 { ...row,address:event.target.value}
//              )
//          console.log(row);
//             }
                

// return <div className="form">
//     <h1>Add Employee</h1>
// <input type="text" onChange={onIdChangeHnadler}  placeholder="id" ></input>
// <input type="text" onChange={onDpChangeHnadler} placeholder="DP"></input>
// <input type="text" onChange={onNameChangeHnadler} placeholder="Name"></input>
// <input type="text" onChange={onAddressChangeHnadler} placeholder="Address"></input>
// <button onClick={()=>props.onPropsAdd(row)}>Add Card</button> 
// </div>

    
// }

// export default Input;

import { useState } from "react";
import "../Css/input.css";
let Input=(props)=>{


 
let [row,setRow]= useState({
    id:"",
     name:"",
     image:"",
     address:""
   });

let onIdChangeHnadler=(event)=>{
    setRow(
       { ...row,id:event.target.value}
    )
console.log(row);
}
let onDpChangeHnadler=(event)=>{
    setRow(
        { ...row,image:event.target.value}
     )
 console.log(row);
    }
    let onNameChangeHnadler=(event)=>{
        setRow(
            { ...row,name:event.target.value}
         )
     console.log(row);
        }
        let onAddressChangeHnadler=(event)=>{
            setRow(
                { ...row,address:event.target.value}
             )
         console.log(row);
            }
                

return <div className="form">
    <h1>Add Employee</h1>
<input type="text" onChange={onIdChangeHnadler}  placeholder="id" ></input>
<input type="text" onChange={onDpChangeHnadler} placeholder="DP"></input>
<input type="text" onChange={onNameChangeHnadler} placeholder="Name"></input>
<input type="text" onChange={onAddressChangeHnadler} placeholder="Address"></input>
<button onClick={()=>props.onPropsAdd(row)}>Add Card</button>
<button onClick={()=>props.onPropsUpdate(row)}>Update Card</button>

</div>

    
}

export default Input;