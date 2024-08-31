import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/Body1.css";
import Accordion from 'react-bootstrap/Accordion';
import Mycard from './Mycard';
import { useState } from "react";
import Image from 'react-bootstrap/Image';



let Body1 = () => {

  let [products,setProduct]=useState([
    {
    Gender:"Women",
    Sizes:"XS",
    Neck:"Round Neck",
    Brand:"Bewakoof X One Piece",
    Rating:"4.5",
    Colors:"Red",
    image:"https://images.bewakoof.com/t640/men-s-black-straw-hat-crew-graphic-printed-oversized-t-shirt-630819-1708598320-1.jpg"
  },
  {
    Gender:"Women",
    Sizes:"S",
    Neck:"Round Neck",
    Brand:"Bewakoof X One Piece",
    Rating:"4",
    Colors:"Blue",
    image:"https://images.bewakoof.com/t640/men-s-black-one-piece-graphic-printed-oversized-t-shirt-630630-1709105339-1.jpg" },

    {
      Gender:"Women",
      Sizes:"M",
      Neck:"V neck",
      Brand:"Bewakoof X One Piece",
      Rating:"3.5",
      Colors:"Yellow",
      image:"https://images.bewakoof.com/t640/men-s-white-going-merry-graphic-printed-oversized-t-shirt-630629-1709105163-1.jpg" },

      {
        Gender:"Women",
        Sizes:"XL",
        Neck:"Round Neck",
        Brand:"Dillinger",
        Rating:"3.5",
        Colors:"Pink",
        image:"https://images.bewakoof.com/t640/men-s-black-customizable-oversized-t-shirt-620625-1709910640-1.jpg" },
    
        
      {
        Gender:"MEN",
        Sizes:"L",
        Neck:"V Neck",
        Brand:"Bewakoof X One Piece",
        Rating:"4",
        Colors:"Brown",
        image:"https://images.bewakoof.com/t640/men-s-black-customizable-t-shirt-608481-1691579986-1.jpg" },

               
      {
        Gender:"MEN",
        Sizes:"2XL",
        Neck:"V Neck",
        Brand:"Difference of Opinion",
        Rating:"4.5",
        Colors:"Brown",
        image:"https://images.bewakoof.com/t640/men-s-brown-life-is-a-trip-graphic-printed-oversized-t-shirt-627754-1700720226-1.jpg" },

               
      {
        Gender:"MEN",
        Sizes:"XS",
        Neck:"Round Neck",
        Brand:"Msd Over Print",
        Rating:"3.5",
        Colors:"Red",
        image:"https://images.bewakoof.com/t640/men-s-white-john-wick-4-1-graphic-printed-t-shirt-589352-1681735276-1.jpg" },

               
      {
        Gender:"MEN",
        Sizes:"S",
        Neck:"Round Neck",
        Brand:"Rigo",
        Rating:"4",
        Colors:"Blue",
        image:"https://images.bewakoof.com/t640/men-s-purple-john-wick-4-1-graphic-printed-t-shirt-589355-1684840039-1.jpg" },


               
      {
        Gender:"WOMEN",
        Sizes:"M",
        Neck:"V Neck",
        Brand:"Bewakoof X One Piece",
        Rating:"4.5",
        Colors:"Yellow",
        image:"https://images.bewakoof.com/t640/men-s-purple-john-wick-4-graphic-printed-t-shirt-589351-1681735314-1.jpg" },


               
      {
        Gender:"MEN",
        Sizes:"L",
        Neck:"Round Neck",
        Brand:"Door 74",
        Rating:"3.5",
        Colors:"Green",
        image:"https://images.bewakoof.com/t640/men-s-pink-egyp-graphic-printed-oversized-t-shirt-617035-1702294984-1.jpg" },


               
      {
        Gender:"Women",
        Sizes:"XL",
        Neck:"V Neck",
        Brand:"Bewakoof X One Piece",
        Rating:"4",
        Colors:"Pink",
        image:"https://images.bewakoof.com/t640/men-s-black-calm-down-graphic-printed-oversized-t-shirt-610870-1692364516-1.jpg" },


               
      {
        Gender:"MEN",
        Sizes:"L",
        Neck:"Round Neck",
        Brand:"Bewakoof X One Piece",
        Rating:"4.5",
        Colors:"Brown",
        image:"https://images.bewakoof.com/t640/men-s-purple-beast-within-graphic-printed-oversized-t-shirt-581488-1701342754-1.jpg" },


               
      {
        Gender:"WOMEN",
        Sizes:"XL",
        Neck:"V Neck",
        Brand:"Bewakoof X One Piece",
        Rating:"3.5",
        Colors:"Red",
        image:"https://images.bewakoof.com/t640/men-s-grey-eternity-graphic-printed-oversized-t-shirt-596129-1708957243-1.jpg" },


               
      {
        Gender:"MEN",
        Sizes:"2XL",
        Neck:"Round Neck",
        Brand:"Dillinger",
        Rating:"4",
        Colors:"Blue",
        image:"https://images.bewakoof.com/t640/men-s-black-panther-mech-graphic-printed-oversized-t-shirt-620196-1694767777-1.jpg" },


               
      {
        Gender:"WOMEN",
        Sizes:"XS",
        Neck:"V Neck",
        Brand:"Difference of Opinion",
        Rating:"3.5",
        Colors:"Yellow",
        image:"https://images.bewakoof.com/t640/men-s-black-gohan-graphic-printed-oversized-t-shirt-516915-1707802243-1.jpg" },


               
      {
        Gender:"MEN",
        Sizes:"S",
        Neck:"Round Neck",
        Brand:"Mad Over Print",
        Rating:"4",
        Colors:"Green",
        image:"https://images.bewakoof.com/t640/men-s-red-spaced-nasa-typography-t-shirt-475126-1706005918-1.jpg" },


               
      {
        Gender:"WOMEN",
        Sizes:"M",
        Neck:"V Neck",
        Brand:"Rigo",
        Rating:"4.5",
        Colors:"Pink",
        image:"https://images.bewakoof.com/t640/men-s-black-explorer-nasa-graphic-printed-oversized-t-shirt-591083-1709216659-1.jpg" },
      

               
      {
        Gender:"MEN",
        Sizes:"L",
        Neck:"Round Neck",
        Brand:"Door 74",
        Rating:"3.5",
        Colors:"Brown",
        image:"https://images.bewakoof.com/t640/men-s-black-dementors-graphic-printed-oversized-t-shirt-589145-1708957255-1.jpg" },


               
      {
        Gender:"WOMEN",
        Sizes:"XS",
        Neck:"Round Neck",
        Brand:"Bewakoof X One Piece",
        Rating:"3.5",
        Colors:"Red",
        image:"https://images.bewakoof.com/t640/men-s-black-dream-graphic-printed-oversized-t-shirt-620199-1708440505-1.jpg" },


               
      {
        Gender:"MEN",
        Sizes:"S",
        Neck:"V Neck",
        Brand:"Dillinger",
        Rating:"4",
        Colors:"Blue",
        image:"https://images.bewakoof.com/t640/men-s-black-moss-head-graphic-printed-oversized-t-shirt-625522-1709216957-1.jpg" },


               
      {
        Gender:"WOMEN",
        Sizes:"M",
        Neck:"V Neck",
        Brand:"Difference Of Opinion",
        Rating:"4.5",
        Colors:"Yellow",
        image:"https://images.bewakoof.com/t640/men-s-blue-infinity-space-graphic-printed-oversized-t-shirt-617524-1709216585-1.jpg" },

        {
          Gender:"MEN",
          Sizes:"L",
          Neck:"Round Neck",
          Brand:"Mad Over Print",
          Rating:"3.5",
          Colors:"Green",
          image:"https://images.bewakoof.com/t640/men-s-black-eternity-graphic-printed-t-shirt-596133-1706598517-1.jpg" },

          {
            Gender:"WOMEN",
            Sizes:"XL",
            Neck:"V Neck",
            Brand:"Rigo",
            Rating:"4",
            Colors:"Pink",
            image:"https://images.bewakoof.com/t640/men-s-black-order-of-the-phoenix-graphic-printed-oversized-t-shirt-589143-1709472777-1.jpg" },

            {
              Gender:"MEN",
              Sizes:"2XL",
              Neck:"Round Neck",
              Brand:"Door 74",
              Rating:"4.5",
              Colors:"Brown",
              image:"https://images.bewakoof.com/t640/men-s-black-chandrayaan-3-hello-moon-graphic-printed-oversized-t-shirt-611236-1709216654-1.jpg" },


              {
                Gender:"",
                Sizes:"",
                Neck:"",
                Brand:"Bewakoof X One Piece",
                Rating:"",
                Colors:"",
                image:"https://images.bewakoof.com/t640/men-s-black-chandrayaan-3-lander-graphic-printed-oversized-t-shirt-612770-1708356295-1.jpg" },


                {
                  Gender:"",
                  Sizes:"",
                  Neck:"",
                  Brand:"Bewakoof X One Piece",
                  Rating:"",
                  Colors:"",
                  image:"https://images.bewakoof.com/t640/men-s-red-moon-rider-graphic-printed-oversized-t-shirt-502017-1701423884-1.jpg" },


                  {
                    Gender:"",
                    Sizes:"",
                    Neck:"",
                    Brand:"Bewakoof X One Piece",
                    Rating:"",
                    Colors:"",
                    image:"https://images.bewakoof.com/t640/men-s-white-karma-circles-typography-oversized-t-shirt-489752-1701342776-1.jpg" },



                    {
                      Gender:"",
                      Sizes:"",
                      Neck:"",
                      Brand:"Bewakoof X One Piece",
                      Rating:"",
                      Colors:"",
                      image:"https://images.bewakoof.com/t640/men-s-white-karma-circles-typography-oversized-t-shirt-489752-1701342776-1.jpg" },


                      {
                        Gender:"",
                        Sizes:"",
                        Neck:"",
                        Brand:"Bewakoof X One Piece",
                        Rating:"",
                        Colors:"",
                        image:"https://images.bewakoof.com/t640/men-s-black-the-view-graphic-printed-oversized-t-shirt-565908-1709214849-1.jpg" },
                        
                        {
                          Gender:"",
                          Sizes:"",
                          Neck:"",
                          Brand:"Bewakoof X One Piece",
                          Rating:"",
                          Colors:"",
                          image:"https://images.bewakoof.com/t640/men-s-white-vengeance-typography-oversized-t-shirt-519142-1701342787-1.jpg" },



                          {
                            Gender:"",
                            Sizes:"",
                            Neck:"",
                            Brand:"Bewakoof X One Piece",
                            Rating:"",
                            Colors:"",
                            image:"https://images.bewakoof.com/t640/men-s-black-lost-mountains-graphic-printed-t-shirt-272010-1706793113-4.jpg" },



                            {
                              Gender:"",
                              Sizes:"",
                              Neck:"",
                              Brand:"Bewakoof X One Piece",
                              Rating:"",
                              Colors:"",
                              image:"https://images.bewakoof.com/t640/men-s-black-hunter-x-hunter-graphic-printed-oversized-t-shirt-591079-1709216597-1.jpg" },
        
                            

                              {
                                Gender:"",
                                Sizes:"",
                                Neck:"",
                                Brand:"Bewakoof X One Piece",
                                Rating:"",
                                Colors:"",
                                image:"https://images.bewakoof.com/t640/men-s-white-wolverine-graphic-printed-t-shirt-627705-1701329896-1.jpg" }
          
  

        

    

  ]);




  let onRemove=(id)=>{

    products= products.filter((row)=>{
       return row.item_id!==id;
     });
     setProduct(products);
     
   }







  return (
    <div>
           <Container>
      <Row>
        <Col><p>Home/MEN Clothing / Women's Oversized T-Shirts</p></Col>
      </Row>
    </Container>

    <Container >
        <br></br>  <br></br>
      <Row>
      <label for="Num"><h2>Women's Oversized T-Shirts </h2></label>
       {/* <p id="num">(520)</p> */}
      </Row>
      <Row>
        <Col><p>Filters</p>

        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Gender</Accordion.Header>
        <Accordion.Body>
         <a><p>Women</p></a>
         <a><p>Unisex</p></a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Sizes</Accordion.Header>
        <Accordion.Body>
        <a><p>XS</p></a>
         <a><p>S</p></a>
         <a><p>M</p></a>
         <a><p>L</p></a>
         <a><p>XL</p></a>
         <a><p>2XL</p></a>
         
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Neck</Accordion.Header>
        <Accordion.Body>
         <a><p>Round Neck</p></a>
         <a><p>V-Neck</p></a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Brand</Accordion.Header>
        <Accordion.Body>
        <a><p>Bewakoof</p></a>
         <a><p>Dillinger</p></a>
         <a><p>Difference of Opiniion</p></a>
         <a><p>Mad Over Print</p></a>
         <a><p>Rigo</p></a>
         <a><p>Door 74</p></a>
         
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Ratings</Accordion.Header>
        <Accordion.Body>
         <a><p>4.5 and above</p></a>
         <a><p>4 and above</p></a>
         <a><p>3.5 and above</p></a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Colors</Accordion.Header>
        <Accordion.Body>
        <a><p>Red</p></a>
         <a><p>Blue</p></a>
         <a><p>Yellow</p></a>
         <a><p>Green</p></a>
         <a><p>Pink</p></a>
         <a><p>Bwron</p></a>
         
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
       
        </Col>




        <Col xs={9}>
      
        <Image src="https://images.bewakoof.com/uploads/category/desktop/Printed-T-Shirts_Inside_Desktop-Banner_IK-1704957421.jpg" fluid />
        <br></br>
     


        {
    products.map((item)=>{
return <Mycard  data={item}></Mycard>
    })
  }
        
     

        
        </Col>
        

        
      </Row>
    </Container>
        </div>
      

      
    
  )
}

export default Body1;