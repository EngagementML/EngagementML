import React, { Component } from "react";
import {
  Container,
  Row,
  Col
} from "react-bootstrap";
import axios from "axios";
import actions from "../../../services/index";
import { Card } from "../components/Card/Card.jsx";
import { FormInputs } from "../components/FormInputs/FormInputs.jsx";
import { UserCard } from "../components/UserCard/UserCard.jsx";
import Button from "../components/CustomButton/CustomButton.jsx";

const industryOptions = ['Food', 'Travel', 'Fashion & Style', 'Photography', 'Lifestyle', 'Design', 'Beauty', 'Sports & Fitness' ]

// import avatar from "../assets/img/faces/face-3.jpg";

class UserProfile extends Component {
  state = {
    email: "",
    name: "",
    fname: "",
    lname: "",
    igUsername: "",
    image: "",
    about: ""
  };

  

  async componentDidMount() {
    let user = await actions.isLoggedIn();
    this.setState({ ...user.data });
    console.log("Current User >> ", user);

    await axios 
      // .get("http://localhost:5000/eML/user/" + this.props.match.params.id)
      .get("https://engagementml.herokuapp.com/eML/user/" + this.props.match.params.id)
      .then(res => {
        this.setState({
          email: res.data.email,
          name: res.data.name,
          fname: res.data.fname,
          lname: res.data.lname,
          igUsername: res.data.igUsername,
          image: res.data.image,
          about: res.data.about,
          industry: res.data.industry,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }


  onChange = (e) => {
    console.log(e.target.name, e.target.value)
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  onSubmit= (e) =>  {
    e.preventDefault();
    console.log('submit triggered....')
    const obj = {
      email: this.state.email,
      name: this.state.name,
      fname: this.state.fname,
      lname: this.state.lname,
      igUsername: this.state.igUsername,
      image: this.state.image,
      about: this.state.about,
      industry: this.state.industry
    };
    console.log(obj, this);
    axios
      .post("http://localhost:5000/eML/users/update/" + this.state._id, obj)
      .then(res => console.log(res.data));

    // this.props.history.push("/")
    alert('User Profile has been updated!');
  }

  

  render() {
    console.log(this);
    // console.log(this.props, this.state);
    // this.onChangeEmail = this.onChangeEmail.bind(this);
    // this.onChangeName = this.onChangeName.bind(this);
    // this.onChangeFname = this.onChangeFname.bind(this);
    // this.onChangeLname = this.onChangeLname.bind(this);
    // this.onChangeIgUsername = this.onChangeIgUsername.bind(this);
    // // this.onChangeImage = this.onChangeImage.bind(this);
    // this.onChangeAbout = this.onChangeAbout.bind(this);
    return (
      <div className="content">
        <Container fluid="true">
          <Row>
            <Col md={8}>
              <Card
                title="Edit Profile"
                content={
                  <form onSubmit={e => this.onSubmit(e)}>
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
                          defaultValue: this.state.igUsername,
                          onChange: this.onChange,
                          name: "igUsername"
                        },
                        {
                          label: "Nickname",
                          type: "text",
                          bsclass: "form-control",
                          placeholder: "eML #1 Fan",
                          defaultValue: this.state.name,
                          onChange: this.onChange,
                          name: "name"
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
                          defaultValue: this.state.fname,
                          onChange: this.onChange,
                          name: "fname"
                        },
                        {
                          label: "Last name",
                          type: "text",
                          bsclass: "form-control",
                          placeholder: "Last name",
                          defaultValue: this.state.lname,
                          onChange: this.onChange,
                          name: "lname"
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
                          defaultValue: "Miami, Florida"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "Industry",
                          type: "select",
                          options: industryOptions,
                          bsclass: "form-control",
                          placeholder: "Industry",
                          defaultValue: this.state.industry
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
                          <FormInputs
                            ncols={["col-md-12"]}
                            properties={[
                              {
                                label: "About me",
                                type: "textarea",
                                rows: 5,
                                bsclass: "form-control",
                                placeholder: "Tell us about yourself",
                                defaultValue: this.state.about,
                                onChange: this.onChange,
                                name: "about"
                              }
                            ]}
                          />
                        
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
                  this.state.image === ""
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
