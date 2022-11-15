import "./css/test.css";
import React from "react";

// import * as React from 'react';
import Button from '@mui/material/Button';

import Header from "./components/header";
import Body from "./components/body";
import Table from"./components/table"

import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={6} md={2} id="nav">
            <h4>Dashboard</h4>
          </Col>
          <Col xs={14} md={10} id="body">
            <Header />

            <Body />
            <Table/>
      
   
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
