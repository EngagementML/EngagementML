/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";

import Button from "../components/CustomButton/CustomButton.jsx";

class Notifications extends Component {
  render() {
    return (
      <div className="content">
        <Container fluid="true">
          <div className="card">
            <div className="header">
              <h4 className="title">Notifications</h4>
              <p className="category">
                Handcrafted by{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/engagamentml"
                >
                  eML
                </a>
                . Please checkout the{" "}
                <a
                  href="http://engagementml.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  full documentation.
                </a>
              </p>
            </div>
            <div className="content">
              <Row>
                <Col md={6}>
                  <h5>Notifications Style</h5>
                  <Alert bsstyle="info">
                    <span>This is a plain notification</span>
                  </Alert>
                  <Alert bsstyle="info">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>This is a notification with close button.</span>
                  </Alert>
                  <Alert bsstyle="info" className="alert-with-icon">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span data-notify="icon" className="pe-7s-bell" />
                    <span data-notify="message">
                      This is a notification with close button and icon.
                    </span>
                  </Alert>
                  <Alert bsstyle="info" className="alert-with-icon">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span data-notify="icon" className="pe-7s-bell" />
                    <span data-notify="message">
                      This is a notification with close button and icon and have
                      many lines. You can see that the icon and the close button
                      are always vertically aligned. This is a beautiful
                      notification. So you don't have to worry about the style.
                    </span>
                  </Alert>
                </Col>
                <Col md={6}>
                  <h5>Notification states</h5>
                  <Alert bsstyle="info">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      <b> Info - </b> This is a regular notification made with
                      bsstyle="info"
                    </span>
                  </Alert>
                  <Alert bsstyle="success">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      <b> Success - </b> This is a regular notification made
                      with bsstyle="success"
                    </span>
                  </Alert>
                  <Alert bsstyle="warning">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      <b> Warning - </b> This is a regular notification made
                      with bsstyle="warning"
                    </span>
                  </Alert>
                  <Alert bsstyle="danger">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      <b> Danger - </b> This is a regular notification made with
                      bsstyle="danger"
                    </span>
                  </Alert>
                </Col>
              </Row>
              <br />
              <br />
              <div className="places-buttons">
                <Row>
                  <Col md={6} mdOffset={3} className="text-center">
                    <h5>
                      Notifications Places
                      <p className="category">Click to view notifications</p>
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <Col md={2} mdOffset={3}>
                    <Button
                      bsstyle="default"
                      block
                      onClick={() => this.props.handleClick("tl")}
                    >
                      Top Left
                    </Button>
                  </Col>
                  <Col md={2}>
                    <Button
                      bsstyle="default"
                      block
                      onClick={() => this.props.handleClick("tc")}
                    >
                      Top Center
                    </Button>
                  </Col>
                  <Col md={2}>
                    <Button
                      bsstyle="default"
                      block
                      onClick={() => this.props.handleClick("tr")}
                    >
                      Top Right
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col md={2} mdOffset={3}>
                    <Button
                      bsstyle="default"
                      block
                      onClick={() => this.props.handleClick("bl")}
                    >
                      Bottom Left
                    </Button>
                  </Col>
                  <Col md={2}>
                    <Button
                      bsstyle="default"
                      block
                      onClick={() => this.props.handleClick("bc")}
                    >
                      Bottom Center
                    </Button>
                  </Col>
                  <Col md={2}>
                    <Button
                      bsstyle="default"
                      block
                      onClick={() => this.props.handleClick("br")}
                    >
                      Bottom Right
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Notifications;
