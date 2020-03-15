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
import {
  Container,
  Row,
  Col,
  FormGroup,
  FormLabel,
  FormControl
} from "react-bootstrap";
import axios from "axios";
import actions from "../../../services/index";
import { Card } from "../components/Card/Card.jsx";
import { FormInputs } from "../components/FormInputs/FormInputs.jsx";
import { UserCard } from "../components/UserCard/UserCard.jsx";
import Button from "../components/CustomButton/CustomButton.jsx";

// import avatar from "../assets/img/faces/face-3.jpg";

class UserProfile extends Component {
  
  state = {
    email: "",
    name: "",
    fname: "",
    lname: "",
    igUsername: "",
    image: "",
    about: "",
  };

  async componentDidMount() {

    let user = await actions.isLoggedIn()
    this.setState({...user.data})
    console.log('Current User >> ',user)

    axios
      // .get("http://localhost:5000/eML/user/" + this.props.match.params.id)
      .get("https://engagementml.herokuapp.com/eML/user/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          email: response.data.email,
          name: response.data.name,
          fname: response.data.fname,
          lname: response.data.lname,
          igUsername: response.data.igUsername,
          image: response.data.image,
          about: response.data.about
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeFname(e) {
    this.setState({
      fname: e.target.value
    });
  }

  onChangeLname(e) {
    this.setState({
      lname: e.target.value
    });
  }

  onChangeIgUsername(e) {
    this.setState({
      igUsername: e.target.value
    });
  }

  onChangeIgUsername(e) {
    this.setState({
      igUsername: e.target.value
    });
  }

  onChangeImage(e) {
    this.setState({
      image: e.target.value
    });
  }

  onChangeAbout(e) {
    this.setState({
      about: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      email: this.state.data.email,
      name: this.state.data.name,
      fname: this.state.data.fname,
      lname: this.state.data.lname,
      igUsername: this.state.data.igUsername,
      image: this.state.data.image,
      about: this.state.data.about
    };
    console.log(obj);
    axios
      .post(
        "http://localhost:5000/eML/users/update/" + this.props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));

    this.props.history.push("/");
  }

  render() {
    console.log(this)
    // console.log(this.props, this.state);
    return (
      <div className="content">
        <Container fluid="true">
          <Row>
            <Col md={8}>
              <Card
                title="Edit Profile"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-5", "col-md-3", "col-md-4"]}
                      properties={[
                        {
                          label: "eML Username",
                          type: "email",
                          bsclass: "form-control",
                          placeholder: "eML",
                          defaultValue: this.state.email,
                          disabled: true
                        },
                        {
                          label: "IG Username",
                          type: "text",
                          bsclass: "form-control",
                          placeholder: "Username",
                          defaultValue: this.state.igUsername
                        },
                        {
                          label: "Nickname",
                          type: "text",
                          bsclass: "form-control",
                          placeholder: this.state.name
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          label: "First name",
                          type: "text",
                          bsclass: "form-control",
                          placeholder: "First name",
                          defaultValue: this.state.fname
                        },
                        {
                          label: "Last name",
                          type: "text",
                          bsclass: "form-control",
                          placeholder: "Last name",
                          defaultValue: this.state.lname
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Adress",
                          type: "text",
                          bsclass: "form-control",
                          placeholder: "Home Adress",
                          defaultValue:
                            "Miami, Florida"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "Industry",
                          type: "text",
                          bsclass: "form-control",
                          placeholder: "Industry",
                          defaultValue: "Marketing"
                        },
                        {
                          label: "Country",
                          type: "text",
                          bsclass: "form-control",
                          placeholder: "Country",
                          defaultValue: "US"
                        },
                        {
                          label: "Postal Code",
                          type: "number",
                          bsclass: "form-control",
                          placeholder: "ZIP Code"
                        }
                      ]}
                    />

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <FormLabel>About Me</FormLabel>
                          <FormControl
                            rows="5"
                            componentclass="textarea"
                            bsclass="form-control"
                            placeholder="Here can be your description"
                            defaultValue={this.state.about}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsstyle="info" pullRight fill type="submit">
                      Update Profile
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={
                  this.state.image == ''
                    ? "https://i.imgur.com/iMovaBD.png"
                    : this.state.image
                }
                name={this.state.name}
                userName={this.state.igUsername}
                description={
                  <span>
                    "Lamborghini Mercy
                    <br />
                    Your chick she so thirsty
                    <br />
                    I'm in that two seat Lambo"
                  </span>
                }
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button>
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

export default UserProfile;
