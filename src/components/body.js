
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
export default function Body() {
  return (
    <>
      <Container fluid>
        <Row className="row mt-4 row mb-4 ">
          <form>
            <div className="row mt-4  row mb-4">
              <label className="col-sm-2 col-form-label">
                Customer Name<span className="astriccolor">*</span>
              </label>
              <div className="col-sm-5">
                <InputGroup className="mb-3">
                  <Form.Control
                    aria-label="Text input with dropdown button"
                    placeholder="Select Customer"
                  />

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
              </div>
            </div>
            <div className="row mb-4 ">
              <label className="col-sm-2 col-form-label">
                Invoice#<span className="astriccolor">*</span>
              </label>
              <div className="col-sm-4">
                <input
                  type="number"
                  className="form-control"
                  name="invoice"
                  placeholder="INV-000001"
                />
                <span className="text-danger"> </span>
              </div>
            </div>

            <div className="row mb-4 ">
              <label className="col-sm-2 col-form-label">
                Order Number<span className="astriccolor"></span>
              </label>
              <div className="col-sm-4">
                <input
                  type="number"
                  className="form-control"
                  name="invoice"
                  placeholder=""
                />
                <span className="text-danger"> </span>
              </div>
            </div>

            <div className="row mb-4 ">
              <label className="col-sm-2 col-form-label">
                Invoice Date<span className="astriccolor">*</span>
              </label>
              <div className="col-sm-4">
                <input
                  type="date"
                  className="form-control"
                  name="invoicedate"
                  placeholder="dd-mm-yyyy"
                />
                <span className="">
                  To create transaction dated before dd-mm-yyyy,{" "}
                  <a href="">click here</a>{" "}
                </span>
              </div>

              <label className="col-sm-1 col-form-label">
                Terms<span className="astriccolor">*</span>
              </label>
              <div className="col-sm-2">
                <InputGroup className="mb-1">
                  <Form.Control
                    aria-label="Text input with dropdown button"
                    placeholder="Due on Receipt"
                  />

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
              </div>

              <label className="col-sm-1 col-form-label">
                Due Date<span className="astriccolor"></span>
              </label>
              <div className="col-sm-2">
                <input
                  type="date"
                  className="form-control"
                  name="invoicedate"
                  placeholder="dd-mm-yyyy"
                />
              </div>
            </div>
          </form>
          <hr />

          <div className="row mb-4 row mt-4 ">
            <label className="col-sm-2 col-form-label">
              Terms<span className="astriccolor">*</span>
            </label>
            <div className="col-sm-4">
              <InputGroup className="mb-1">
                <Form.Control
                  aria-label="Text input with dropdown button"
                  placeholder="Select or Add Salesperson"
                />

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
            </div>
          </div>

          <hr />

          {/* <InputGroup>
        <InputGroup.Text>With textarea</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup> */}
          <div className="row mb-4 row mt-4">
            <label className="col-sm-2 col-form-label">
              Subject<span className="astriccolor"></span>
            </label>
            <div className="col-sm-5">
              <InputGroup>
                <InputGroup></InputGroup>
                <Form.Control as="textarea" aria-label="With textarea" />
              </InputGroup>
            </div>
          </div>

          {/* <div className="row mb-4 ">
                            <label className="col-sm-2 col-form-label"></label>
                            <div className="col-sm-4">
                                <button className="btn btn-success"> Submit </button>
                            </div>
                        </div> */}
        </Row>
        <hr />

        {/* <Row>
                    <form >
                        <div className="row mb-4 row mt-4 ">
                            <label className="col-sm-2 col-form-label">Terms<span className="astriccolor">*</span></label>
                            <div className="col-sm-4">

                                <InputGroup className="mb-1" >
                                    <Form.Control aria-label="Text input with dropdown button" placeholder="Select or Add Salesperson" />

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
                            </div>

                        </div>


                    </form>
                </Row> */}
      </Container>
    </>
  );
}
