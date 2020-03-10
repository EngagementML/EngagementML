import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

class Navigation extends Component {
  
  state = {
    show: false
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/#">GucciPlate</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/About">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="Roadmap">
                Roadmap
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://github.com/grpecunia">
                  Github
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Contact">
                  Contact
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://riverapecunia.com">
                  Developer
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button onClick={this.showModal} variant="outline-success">
                Login
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.show}
        >
          <Modal.Header>
            <Modal.Title
              id="contained-modal-title-vcenter"
              style={{ textAlign: "center" }}
            >
              GucciPlate App
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3 className="home">
              <b>About the GucciPlate Project</b>
            </h3>
            <p style={{ paddingLeft: "10%", paddingRight: "10%" }}>
              This is an open source application intended as boilerplate for
              programmers that want a simple Bootstrap template to engage in
              fast prototyping for React Applications.
            </p>
            <p className="home">
              For more information email us at:{" "}
              <a href="mailto:tickercorrelate@gmail.com">
                GucciPlate@gmail.com
              </a>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Navigation;
