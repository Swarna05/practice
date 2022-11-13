import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
export default function Body() {
    return (
        <>
            <Container >
                <Row>
                    <Col md="6">
                        <label htmlFor="">Customer Name

                            <InputGroup className="mb-3">
                                <Form.Control aria-label="Text input with dropdown button" />

                                <DropdownButton
                                    variant="outline-secondary"
                                    title=""
                                    id="input-group-dropdown-2"
                                    align="end"
                                >
                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                </DropdownButton>
                            </InputGroup>
                        </label>
                    </Col>

                </Row>


                <Row>
                    <Col md="4">
                        <label htmlFor="">Invoice#
                            <InputGroup className="mb-3">

                                <InputGroup id="invoice"></InputGroup>
                                <Form.Control
                                    placeholder="INV-000001"
                                    aria-label="Invoice"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </label>


                    </Col>
                    <Col md="4">
                        <label htmlFor="">Order Number
                            <InputGroup className="mb-3">

                                <InputGroup id="invoice"></InputGroup>
                                <Form.Control
                                    placeholder=""
                                    aria-label="Order"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </label>


                    </Col>
                </Row>

                <Row>
                    <Col md="4">
                        <label htmlFor="">Invoice Date
                        <input  name="requested_order_ship_date"  type="date"  />
                        </label>


                    </Col>
                    <Col md="4">
                        <label htmlFor="">Order Number
                            <InputGroup className="mb-3">

                                <InputGroup id="invoice" type="date"></InputGroup>
                                <Form.Control
                                    placeholder=""
                                    aria-label="Order"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </label>


                    </Col>
                    <Col md="4">
                        <label htmlFor="">Order Number
                            <InputGroup className="mb-3">

                                <InputGroup id="invoice"></InputGroup>
                                <Form.Control
                                    placeholder=""
                                    aria-label="Order"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </label>


                    </Col>
                </Row>
            </Container>

        </>
    )
}
