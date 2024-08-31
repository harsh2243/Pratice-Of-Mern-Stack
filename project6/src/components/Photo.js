
import 'bootstrap/dist/css/bootstrap.min.css';
 import Input from "./Input";
 import Output from "./Output";
 import '../css/Photo.css'

import { useState } from "react";


let App=()=>{

  let [products,setProduct]=useState([
    {
      //item_id:10032,
    brand:"Bewakoof",
    name:"Men's Gold  ",
    size:"M",
    price:"299",
    image:"https://images.bewakoof.com/t1080/men-s-gold-flame-solid-short-kurta-502497-1663931320-1.jpg"
  },
  {
    // item_id:10033,
    brand:"Luis Philip",
    name:"Flame Relaxed ",
    size:"L",
    price:"399",
    image:"https://images.bewakoof.com/t1080/men-s-olive-relaxed-fit-short-kurta-302581-1663931236-1.jpg"
  },
  {
    // item_id:10033,
    brand:"Luis Philip",
    name:"Flame Relaxed ",
    size:"L",
    price:"399",
    image:"https://images.bewakoof.com/t1080/men-s-olive-relaxed-fit-short-kurta-302581-1663931236-1.jpg"
  },
  {
    //item_id:10032,
  brand:"Bewakoof",
  name:"Men's Gold  ",
  size:"M",
  price:"299",
  image:"https://images.bewakoof.com/t1080/men-s-gold-flame-solid-short-kurta-502497-1663931320-1.jpg"
},


  ]);

let updateProps=(row)=>{
setProduct([...products,row])
console.log(row);
}
let onRemove=(id)=>{

 products= products.filter((row)=>{
    return row.item_id!==id;
  });
  setProduct(products);
  
}
let updatecard=(id)=>{
  products=products.filter((row)=>{
    return row.item_id!=id.item_id;
  });
  setProduct([...products,id])
}
return <div className="main">
  {/* <Navbar1></Navbar1>
  <Navbar></Navbar> */}
<div className="output">
{/* <h1>Bewakoof</h1> */}
  {
    products.map((item)=>{
return <Output key={item.item_id} onRemove={onRemove} data={item}></Output>
    })
  }
</div>

<div className="input">
<Input updateProps={updateProps} updatecard={updatecard}/>
</div>

</div>


}
export default App;


