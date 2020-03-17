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
import { Container, Row, Col } from "react-bootstrap";
import axios from 'axios'
import Card from "../components/Card/Card";
// import { iconsArray } from "../variables/Variables.jsx";

// axios.get("http://localhost:5000/profiles").then(res => console.log(res.data));


class Icons extends Component {

  state = {
    profiles : []
  }
  
  componentDidMount() {
    axios
      // .get("http://localhost:5000/profiles/")
      .get("https://engagementml.herokuapp.com/profiles/")
      .then(res => {
        // console.log(res, res.data);
        this.setState({
          profiles: res.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  profileList() {
    return this.state.profiles.map((profile, i) => {
      return (
        <Col lg={3} md={3} sm={4} xs={6} className="font-icon-list" key={i}>
          <div className="font-icon-detail">
            <h4>{profile.username}</h4>
            <br />
            {/* <br /> */}
            <img alt={profile.username} style={{ width: "100%" }} src={profile.profile_pic_url_hd} />
            <br />
            <br />
            <h6>{profile.full_name}</h6>
            <br />
            <p>
              <strong>Followers:</strong> {profile.edge_followed_by.count}
            </p>
          </div>
        </Col>
      );
    });
  }

  render() {
    console.log("this is props pon di icon page >>", this.props.profiles);
    return (
      <div className="content">
        <Container fluid="true">
          <Row>
            <Col md={12}>
              <Card
                title="Top Infuencers"
                ctAllIcons
                category={
                  <span>
                    Handcrafted by your friends from{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://engagementml.herokuapp.com"
                    >
                      EngagementML
                    </a>
                  </span>
                }
                content={
                  <Row>

                  {this.profileList()}
                    {/* {profiles.map((profile, key) => {
                      return (
                        <Col
                          lg={2}
                          md={3}
                          sm={4}
                          xs={6}
                          className="font-icon-list"
                          key={key}
                        >
                          <div className="font-icon-detail">
                            <img src={profile.profile_pic_url_hd} />
                            <p>{profile.username}</p>
                          </div>
                        </Col>
                      );
                    })} */}
                  </Row>
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
