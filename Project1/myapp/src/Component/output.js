// import "../Css/Day2.css"
// let Output=(afnan)=>{
//     return <div className="card">
//         <img src={afnan.image}></img>
//       <h1>{afnan.name}</h1>
//       <h2>{afnan.id}</h2>
//       <h3>{afnan.age}</h3>
//       <h3>{afnan.address}</h3>
//       <button>Remove</button>
//     </div>
//   }
//   export default Output;

// import "../Css/output.css";

// let Output=(row)=>{
//     return <div className="Card">
//             <img src={row.image}></img>
//         <h2>{row.name}</h2>
//         <p>{row.id}</p>
//         <p> {row.address}</p>
//         <button>Remove</button>
//     </div>
// }
// export default Output;

import "../Css/output.css";

let Output=(row)=>{
    return <div className="Card">
            <img src={row.image}></img>
        <h2>{row.name}</h2>
        <p>{row.id}</p>
        <p> {row.address}</p>
        <button onClick={()=>row.onPropsRemove(row.id)}>Remove Card</button>

    </div>
}
export default Output;