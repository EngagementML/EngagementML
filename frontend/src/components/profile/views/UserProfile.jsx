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

  componentDidMount() {
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
                          type: "text",
                          bsclass: "form-control",
                          placeholder: "eML",
                          defaultValue: "this.props.user",
                          disabled: true
                        },
                        {
                          label: "IG Username",
                          type: "text",
                          bsclass: "form-control",
                          placeholder: "Username",
                          defaultValue: "eML2020"
                        },
                        {
                          label: "Email address",
                          type: "email",
                          bsclass: "form-control",
                          placeholder: "Email"
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
                          defaultValue: "Mike"
                        },
                        {
                          label: "Last name",
                          type: "text",
                          bsclass: "form-control",
                          placeholder: "Last name",
                          defaultValue: "Andrew"
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
                            "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "City",
                          type: "text",
                          bsclass: "form-control",
                          placeholder: "City",
                          defaultValue: "Mike"
                        },
                        {
                          label: "Country",
                          type: "text",
                          bsclass: "form-control",
                          placeholder: "Country",
                          defaultValue: "Andrew"
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
                            defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
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
                avatar="https://i.imgur.com/iMovaBD.png"
                name="Mike Andrew"
                userName="michael24"
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
