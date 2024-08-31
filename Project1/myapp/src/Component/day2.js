import "../Css/day2.css"
let Output=(afnan)=>{
    return <div className="card">
        <img src={afnan.image}></img>
      <h1>{afnan.name}</h1>
      <h2>{afnan.id}</h2>
      <h3>{afnan.age}</h3>
      <h3>{afnan.address}</h3>
      <button>Remove</button>
    </div>
  }
  export default Output;