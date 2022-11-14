import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

export default function header() {
  return (
    <>
  
      <Navbar bg="" variant="">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://th.bing.com/th/id/OIP.hUgnx53ca2-qRthA03BHrAHaIp?pid=ImgDet&rs=1"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            New Invoice
          </Navbar.Brand>
        </Container>
      </Navbar>
      </>







//     <Container fluid>
// <Navbar bg="" expand="lg" fluid>
      
//       <Navbar.Brand href="#home">New Invoice</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         {/* <Nav className="me-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#link">Link</Nav.Link>
//           <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.2">
//               Another action
//             </NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item href="#action/3.4">
//               Separated link
//             </NavDropdown.Item> */}
//           {/* </NavDropdown>
//         </Nav> */}
//       </Navbar.Collapse>

    
//           </Navbar>

//     </Container>
    
  )
}

