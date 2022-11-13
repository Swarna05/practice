import './App.css';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Header from "./Components/Header";
import Body from "./Components/Body";
import Test from "./Components/Test";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';


// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function App() {
  return (
    <>
      <Container>

        {/* <Test/> */}
        <Header />


        <Body />

      </Container>



    </>
  );
}

export default App;
