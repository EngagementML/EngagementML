import React, { Component } from "react";
import {Container, Row, Col } from "react-bootstrap";
import Card from "../components/Card/Card";
import logo from "../../../images/engagementMLbsm.png";
import axios from "axios";


class Icons extends Component {
  handleSubmit(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    axios({
      method: "POST",
      url: "https://engagementml.herokuapp.com/send",
      data: {
        name: name,
        email: email,
        message: message,
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        alert("Thank you for reaching out to us! Message Sent.");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert(
          "Error upon sending form! Message failed to send. Please try again!"
        );
      }
    });
  }

  resetForm() {
    document.getElementById("contact-form").reset();
  }

  render() {
    return (
      <div className="content">
        <Container fluid="true">
          <Row>
            <Col md={12}>
              <Card
                hCenter
                title="Interested in Customizing your eML model?"
                category="Are you looking for a different industry or strategy? Reach out to us and let's talk!"
                ctTableResponsive
                // ctTableFullWidth
                // ctTableUpgrade
                content={
                  <div style={{ textAlign: "center" }}>
                    <img src={logo} alt="EngagementML" width="400" />
                    <br />
                    <div className="box">
                      <div className="col-lg-10 offset-lg-1">
                        <form
                          action="/send"
                          id="contact-form"
                          onSubmit={(e) => this.handleSubmit(e)}
                          method="POST"
                          // role="form"
                        >
                          <div className="fields">
                            <div className="field half">
                              <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
                                required
                              />
                            </div>
                            <div className="field half">
                              <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Email"
                                required
                              />
                            </div>
                            <div className="field">
                              <textarea
                                id="message"
                                name="message"
                                placeholder="Enter your message here"
                                rows="3"
                                required
                              />
                            </div>
                          </div>
                          <ul className="actions special">
                            <li>
                              <input
                                type="submit"
                                className="btn btn-outline btn-success"
                              />
                            </li>
                          </ul>
                        </form>
                      </div>
                    </div>
                  </div>

                  // <Table>
                  //   <thead>
                  //     <tr>
                  //       <th />
                  //       <th className="text-center">Free</th>
                  //       <th className="text-center">PRO</th>
                  //     </tr>
                  //   </thead>
                  //   <tbody>
                  //     <tr>
                  //       <td>Components</td>
                  //       <td>30</td>
                  //       <td>60</td>
                  //     </tr>
                  //     <tr>
                  //       <td>Plugins</td>
                  //       <td>3</td>
                  //       <td>13</td>
                  //     </tr>
                  //     <tr>
                  //       <td>Example Pages</td>
                  //       <td>7</td>
                  //       <td>24</td>
                  //     </tr>
                  //     <tr>
                  //       <td>Login/Register/Lock Pages</td>
                  //       <td>
                  //         <i className="fa fa-times text-danger" />
                  //       </td>
                  //       <td>
                  //         <i className="fa fa-check text-success" />
                  //       </td>
                  //     </tr>
                  //     <tr>
                  //       <td>Premium Support</td>
                  //       <td>
                  //         <i className="fa fa-times text-danger" />
                  //       </td>
                  //       <td>
                  //         <i className="fa fa-check text-success" />
                  //       </td>
                  //     </tr>
                  //     <tr>
                  //       <td />
                  //       <td>Free</td>
                  //       <td>Just $49</td>
                  //     </tr>
                  //     <tr>
                  //       <td />
                  //       <td>
                  //         <Button
                  //           href="#"
                  //           round
                  //           fill
                  //           disabled
                  //           bsstyle="default"
                  //         >
                  //           Current Version
                  //         </Button>
                  //       </td>
                  //       <td>
                  //         <Button
                  //           target="_blank"
                  //           href="http://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react/?ref=lbdr-upgrade-page"
                  //           round
                  //           fill
                  //           bsstyle="info"
                  //         >
                  //           Upgrade to PRO
                  //         </Button>
                  //       </td>
                  //     </tr>
                  //   </tbody>
                  // </Table>
                }
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Icons;
