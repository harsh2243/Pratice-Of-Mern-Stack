// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// // function Mynavbar() {
// //   return (
// //     <Navbar expand="lg" className="bg-body-tertiary">
// //       <Container>
// //         <Navbar.Brand href="#home"><img src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"></img></Navbar.Brand>
// //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
// //         <Navbar.Collapse id="basic-navbar-nav">
// //           <Nav className="me-auto">
// //             <Nav.Link href="#home">MEN</Nav.Link>
// //             <Nav.Link href="#link">WOMEN</Nav.Link>
// //             <Nav.Link href="#link">MOBILE COVERS</Nav.Link>
// //             {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
// //               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
// //               <NavDropdown.Item href="#action/3.2">
// //                 Another action
// //               </NavDropdown.Item>
// //               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
// //               <NavDropdown.Divider />
// //               <NavDropdown.Item href="#action/3.4">
// //                 Separated link
// //               </NavDropdown.Item>
// //             </NavDropdown> */}
// //           </Nav>
// //         </Navbar.Collapse>
// //       </Container>
// //     </Navbar>
// //   );
// // };


// // export default Mynavbar;

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"><img  width={220} className='ml-3' src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">MEN</Nav.Link>
            <Nav.Link href="#action2">WOMEN</Nav.Link>
            <Nav.Link href="#action3" >
              MOBILE COVERS
            </Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;