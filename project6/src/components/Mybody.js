import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Accordion from 'react-bootstrap/Accordion';



const Body1 = () => {
  return (
    <div>
           <Container>
      <Row>
        <Col><p>Home/Women Clothing / Women's Oversized T-Shirts</p></Col>
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




        <Col xs={9}></Col>
        

        
      </Row>
    </Container>
        </div>
      

      
    
  )
}

export default Body1;