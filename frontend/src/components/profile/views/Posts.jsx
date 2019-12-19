import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Card from "../components/Card/Card";
import logo from "../../../images/engagementMLbsm.png";
import axios from "axios";
import actions from "../../../services/index";


class Posts extends Component {

  state = {};

  async componentDidMount() {
    let user = await actions.isLoggedIn();
    this.setState({ ...user.data });
    // console.log("Current User >> ", user);

    await axios
      // .get("http://localhost:5000/profile/" + this.state.igUsername)
      .get(
        "https://engagementml.herokuapp.com/profile/" + this.state.igUsername
      )
      .then(res => {
        // console.log(res, res.data);
        this.setState({
          profile: res.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });

    await axios
      .get("https://engagementml.herokuapp.com/posts/" + this.state.profile.id)
      .then(res => {
        // console.log(res, res.data);
        this.setState({
          posts: res.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });

    await axios
      // .get("http://localhost:5000/eML/user/" + this.props.match.params.id)
      .get(
        "https://engagementml.herokuapp.com/eML/user/" +
          this.props.match.params.id
      )
      .then(res => {
        this.setState({
          email: res.data.email,
          name: res.data.name,
          fname: res.data.fname,
          lname: res.data.lname,
          igUsername: res.data.igUsername,
          image: res.data.image,
          about: res.data.about,
          industry: res.data.industry
          // role: res.data.role,
          // competitor: res.data.competitor,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }


  render() {
    return (
      <div className="content">
        <Container fluid="true">
          <Row>
            <Col md={12}>
              <Card
                hCenter
                title="Your Content - Track your Strategy"
                category="Post-Related Metrics - COMING SOON!"
                ctTableResponsive
                content={
                  <div style={{ textAlign: "center" }}>
                    
                    
                    <br />
                    <img src={logo} alt="EngagementML" width="400" />
                    <br />
                  </div>
                }
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Posts;