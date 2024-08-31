





import "../css/Output.css";
let Output=(props)=>{

    //console.log(props.data);
return <div>

<div className="show name">
<img className="name1" src={props.data.image}></img>
<p>{props.data.item_id}</p>
<h5>{props.data.brand}</h5>
<p>{props.data.name}</p>
<p>{props.data.size}</p>
<p>INR {props.data.price}</p>
{/* <button onClick={()=>props.onRemove(props.data.item_id)}>Remove</button> */}
</div>
</div>


}
export default Output;