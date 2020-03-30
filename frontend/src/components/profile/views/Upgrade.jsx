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
import {Container, Row, Col } from "react-bootstrap";
import Card from "../components/Card/Card";
import logo from "../../../images/engagementMLbsm.png";
// import Button from "../components/CustomButton/CustomButton";

class Icons extends Component {
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
                  <div style={{textAlign:'center'}}>
                  <img src={logo} alt='EngagementML' width='400'/><br/>
                    Email us at <a href='mailto:engagementml@gmail.com'>engagementML@gmail.com</a>!
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
