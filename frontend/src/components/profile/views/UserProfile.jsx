import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Modal,
  Carousel
} from "react-bootstrap";
import axios from "axios";
import actions from "../../../services/index";
import { Card } from "../components/Card/Card.jsx";
import { FormInputs } from "../components/FormInputs/FormInputs.jsx";
import { UserCard } from "../components/UserCard/UserCard.jsx";
import Button from "../components/CustomButton/CustomButton.jsx";
import "font-awesome/css/font-awesome.min.css";
import profile from "../assets/img/profile-placeholder.png";
import logo from "../assets/img/emllogo.png";



// const industryOptions = ['Food', 'Travel', 'Fashion & Style', 'Photography', 'Lifestyle', 'Design', 'Beauty', 'Sports & Fitness' ]

// import avatar from "../assets/img/faces/face-3.jpg";

class UserProfile extends Component {
  state = {
    show:false,
    // showHashtag:false,
    error: '',
    email: "",
    name: "",
    fname: "",
    lname: "",
    igUsername: "",
    image: "",
    about: "",
    industry: "",
    hashtags:[],
    // role: [],
    // competitor:[],
    profile: {
      // profile_pic_url_hd : profile
    }
  };

  async componentDidMount() {
    let user = await actions.isLoggedIn();
    this.setState({ ...user.data });
    console.log("Current User >> ", user);

    await axios
      // .get("http://localhost:5000/profiles/")
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
          industry: res.data.industry,
          hashtags:res.data.hashtags

          // role: res.data.role,
          // competitor: res.data.competitor,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChange = e => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("submit triggered....");
    const obj = {
      email: this.state.email,
      name: this.state.name,
      fname: this.state.fname,
      lname: this.state.lname,
      igUsername: this.state.igUsername,
      image: this.state.image,
      about: this.state.about,
      industry: this.state.industry,
      hashtags:this.state.hashtags
      // role: this.state.role,
      // competitor: this.state.competitor,
    };
    // console.log(obj, this);
    axios
      .post(
        "https://engagementml.herokuapp.com/eML/users/update/" + this.state._id,
        obj
      )
      .then(res => console.log(res.data));

    // this.props.history.push("/")
    // alert("User Profile has been updated!");
    this.setState({
      show: true,
      msg: 'Your EngagementML User Profile has been updated successfully!'
    });
  };

  onImgErrorSmall = e => {
    console.log(e.target);
    // Don't cors this placeholder
    e.target.src =
      "https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg";
    // disable onerror to prevent endless loop
    e.target.onError = "";
    return true;
  };

  showAlert = () => {
    this.setState({ show: true });
  };

  hideAlert = () => {
    this.setState({ show: false });
  };

  // showHashtagAlert = () => {
  //   console.log("Clicked on hashtag alert!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  //   this.setState({ showHashtag: true });
  // };

  // hideHashtagAlert = () => {
  //   this.setState({ showHashtag: false });
  // };

  // modalComp = () => {
  //   return (

  //     <Modal aria-labelledby="contained-modal-title-vcenter">
  //     <Modal.Header closeButton>
  //       <Modal.Title id="contained-modal-title-vcenter">
  //         Using Grid in Modal
  //       </Modal.Title>
  //     </Modal.Header>
  //     <Modal.Body>
  //       <Container>
  //         <Row className="show-grid">
  //           <Col xs={12} md={8}>
  //             <code>.col-xs-12 .col-md-8</code>
  //           </Col>
  //           <Col xs={6} md={4}>
  //             <code>.col-xs-6 .col-md-4</code>
  //           </Col>
  //         </Row>

  //         <Row className="show-grid">
  //           <Col xs={6} md={4}>
  //             <code>.col-xs-6 .col-md-4</code>
  //           </Col>
  //           <Col xs={6} md={4}>
  //             <code>.col-xs-6 .col-md-4</code>
  //           </Col>
  //           <Col xs={6} md={4}>
  //             <code>.col-xs-6 .col-md-4</code>
  //           </Col>
  //         </Row>
  //       </Container>
  //     </Modal.Body>
  //     <Modal.Footer>
  //       <Button onClick={() => this.hideHashtagAlert()}>Close</Button>
  //     </Modal.Footer>
  //   </Modal>

    // <React.Fragment>
    // <Modal size="sm" show={this.state.showHashtag} onHide={() => this.hideHashtagAlert()} aria-labelledby="modalError">
    //   <Modal.Header closeButton>
    //     <Modal.Title id="modalError">
    //       <strong>{"Heyoooo",Hashtag}</strong>
    //     </Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>{Hashtag}</Modal.Body>
    // </Modal>
    // </React.Fragment>
  //   )
  // }


  getHashtagCollection = () => {

    let bootstrapArray = ["info","danger","success","dark","warning","primary"]
    // Colors that work (locally): Danger, Warning, Primary, Info
    // Colors that don't work (locally): Light

    const randomNumber = (min, max) => {  
      return Math.floor(Math.random() * (max - min) + min); 
    }  

    if (this.state.hashtags.length!= 0){
      return (
        this.state.hashtags.map(eachHashtag => {
  
          let randomColor = bootstrapArray[randomNumber(0,5)]
          console.log("Hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee","#",eachHashtag, randomColor)
        return (
            // <Button className= {`btn btn-${randomColor} m-1`} onClick={(eachHashtag) => this.modalHashtag}>{`# ${eachHashtag}`}</Button>
            <Button className= {`btn btn-${randomColor} m-1`} >{`# ${eachHashtag}`}</Button>
        )
        })
      )

    } else {
      return <div className="display-6" >You haven't added any hashtags yet, to do so visit the Hashtags Tab.</div>
    }

  }

 

  render() {
    console.log(this.state);
    if (
      this.state.email !== undefined &&
      this.state.profile !== {} &&
      this.state.posts !== undefined
    ) {
      return (
        <>
        {/* User Profile Update Modal */}
        <Modal
          size="sm"
          show={this.state.show}
          onHide={() => this.hideAlert()}
          aria-labelledby="modalError"
        >
          <Modal.Header closeButton>
            <Modal.Title id="modalError">
              <strong>User Profile</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.msg}</Modal.Body>
        </Modal>

        {/* Hashtag Modal */}

        {/* <this.modalComp /> */}

        <div className="content">
          <Container fluid="true">
            <Row>
              <Col md={4}>
                <UserCard
                  bgImage="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3"
                  avatar={
                    this.state.profile === {}
                      ? profile
                      : this.state.profile.profile_pic_url_hd
                  }
                  name={this.state.igUsername}
                  userName={this.state.name}
                  description={
                    <div>
                      {this.state.about}
                      <br />
                      <br />
                      {this.state.profile.biography}
                      <br />
                      <br />
                      <strong>Followers: </strong>{" "}
                      {this.state.profile.edge_followed_by.count.toLocaleString(
                        navigator.language,
                        { minimumFractionDigits: 0 }
                      )}
                      <br />
                      <strong>Total IG Posts: </strong>{" "}
                      {this.state.profile.edge_owner_to_timeline_media.count.toLocaleString(
                        navigator.language,
                        { minimumFractionDigits: 0 }
                      )}
                    </div>
                  }
                  socials={
                    <div style={{ paddingBottom: "10px" }}>
                      <strong>Industry : {this.state.industry}</strong>
                      <br />
                      {/* <Button simple>
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button> */}
                    </div>
                  }
                />
                <Col md={12} style={{ textAlign: "center" }}>
                  <Card
                    title="Latest Posts"
                    content={
                      <>
                        <img
                          src={this.state.posts[0].thumbnail}
                          alt="Post"
                          onError={e => this.onImgErrorSmall(e)}
                          width="50px"
                        />

                        <img
                          src={this.state.posts[1].thumbnail}
                          alt="Post"
                          onError={e => this.onImgErrorSmall(e)}
                          width="50px"
                        />

                        <img
                          src={this.state.posts[2].thumbnail}
                          alt="Post"
                          onError={e => this.onImgErrorSmall(e)}
                          width="50px"
                        />

                        <img
                          src={this.state.posts[3].thumbnail}
                          alt="Post"
                          onError={e => this.onImgErrorSmall(e)}
                          width="50px"
                        />

                        <img
                          src={this.state.posts[4].thumbnail}
                          alt="Post"
                          onError={e => this.onImgErrorSmall(e)}
                          width="50px"
                        />

                        <img
                          src={this.state.posts[5].thumbnail}
                          alt="Post"
                          onError={e => this.onImgErrorSmall(e)}
                          width="50px"
                        />

                        <img
                          src={this.state.posts[6].thumbnail}
                          alt="Post"
                          onError={e => this.onImgErrorSmall(e)}
                          width="50px"
                        />
                      </>
                    }
                  />
                </Col>
              </Col>
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
                            name: "igUsername",
                            disabled: true
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

                      {/* // Future Dev - Competitors / Role Models */}
                      {/* <FormInputs
                        ncols={["col-md-6", "col-md-6"]}
                        properties={[
                          {
                            label: "Competitor",
                            type: "text",
                            bsclass: "form-control",
                            placeholder: "Competitors",
                            // defaultValue: this.state.competitor,
                            // onChange: this.onChange,
                            name: "coompetitor"
                          },
                          {
                            label: "Role Model",
                            type: "text",
                            bsclass: "form-control",
                            placeholder: "Role-Model",
                            // defaultValue: this.state.role,
                            // onChange: this.onChange,
                            name: "role"
                          }
                        ]}
                      /> */}

                      <Form.Group name="industry">
                        <Form.Label>Change your Industry</Form.Label>
                        <Form.Control
                          as="select"
                          value={this.state.industry}
                          onChange={this.onChange}
                          name="industry"
                        >
                          <option disabled="disabled">
                            Beauty - Coming Soon!
                          </option>
                          <option disabled="disabled">
                            Design - Coming Soon!
                          </option>
                          <option>Fashion & Style</option>
                          <option>Food</option>
                          <option>Lifestyle</option>
                          <option>Photography</option>
                          <option disabled="disabled">
                            Sports & Fitness - Coming Soon!
                          </option>
                          <option disabled="disabled">
                            Travel - Coming Soon!
                          </option>
                        </Form.Control>
                      </Form.Group>
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
                      <Button className="success pullRight fill mb-5" type="submit">
                        Update Profile
                      </Button>
                  <Card
                    // className = "m-4"
                    // style = {{height:"5rem"}}
                    title="Your Hashtag Collection"
                    content={
                        // <Carousel>
                        <React.Fragment>
                          {this.getHashtagCollection()}
                        </React.Fragment>
                        // </Carousel>
                    }
                  />
                      <div className="clearfix" />
                    </form>
                  }
                />
              </Col>
            </Row>
          </Container>
        </div>
        </>
      );
    } else {
      return (
        <div>
          <h3 className="loading" style={{ textAlign: "center" }}>
            Loading...
          </h3>
          <img
            src={logo}
            alt="eML"
            width="500"
            style={{
              textAlign: "center",
              transformOrigin: "50% 50%",
              animation:
                "3.0303s linear 0s infinite reverse forwards running spin",
            }}
          />
        </div>
      );
    }
  }
}

export default UserProfile;
