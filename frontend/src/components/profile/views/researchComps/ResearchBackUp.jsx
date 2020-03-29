import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import actions from "../../../services/index";
import Card from "../components/Card/Card.jsx";

// axios.get("http://localhost:5000/profiles").then(res => console.log(res.data));

class Research extends Component {
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
      <div className="content" style={{ height: "100vh" }}>
        <Container fluid="true">
          <Row>
            <Col
              lg={4}
              md={6}
              sm={10}
              xs={12}
              // className="font-icon-list"
              // key={i}
            >
              <Card
                title="Followers vs Comments Count"
                category={`eML Comparative Analysis for the ${this.state.industry} Category`}
                content={
                  <img
                    className="d-block alignItemsCenter"
                    src={`https://engagementmlapp.s3.amazonaws.com/${this.state.industry}/Followers_VS_Comments_Counts.jpeg`}
                    alt="Followers vs Comments Count"
                    width="270"
                  />
                }
              />
            </Col>
            <Col
              lg={4}
              md={6}
              sm={10}
              xs={12}
              // className="font-icon-list"
              // key={i}
            >
              <Card
                title="Followers vs Likes"
                category={`eML Comparative Analysis for the ${this.state.industry} Category`}
                content={
                  <img
                    className="d-block alignItemsCenter"
                    src={`https://engagementmlapp.s3.amazonaws.com/${this.state.industry}/Followers_VS_Likes.jpeg`}
                    alt="Followers Vs Likes"
                    width="270"
                  />
                }
              />
            </Col>
            <Col
              lg={4}
              md={6}
              sm={10}
              xs={12}
              // className="font-icon-list"
              // key={i}
            >
              <Card
                title="Followers vs Video View Count"
                category={`eML Comparative Analysis for the ${this.state.industry} Category`}
                content={
                  <img
                    className="d-block alignItemsCenter"
                    src={`https://engagementmlapp.s3.amazonaws.com/${this.state.industry}/Followers_VS_Video_view_Count.jpeg`}
                    alt="Followers vs Video View Count"
                    width="270"
                  />
                }
              />
            </Col>
            <Col
              lg={6}
              md={6}
              sm={10}
              xs={12}
              // className="font-icon-list"
              // key={i}
            >
              <Card
                title={`🤖 Correlation Matrix `}
                category={`${this.state.industry} Category Posts`}
                content={
                  <img
                    className="d-block alignItemsCenter"
                    src={`https://engagementmlapp.s3.amazonaws.com/${this.state.industry}/Correlation_Matrix.jpeg`}
                    alt="Correlation"
                    width="400"
                  />
                }
              />
            </Col>
            <Col
              lg={6}
              md={6}
              sm={10}
              xs={12}
              // className="font-icon-list"
              // key={i}
            >
              <Card
                title={`☁️ Word Cloud `}
                category={`${this.state.industry} Category Posts`}
                content={
                  <img
                    className="d-block alignItemsCenter"
                    src={`https://engagementmlapp.s3.amazonaws.com/${this.state.industry}/word_cloud.jpeg`}
                    alt="Word Cloud"
                    width="410"
                  />
                }
                legend="Incorporate these keywords to your post captions to increase engagement"
              />
            </Col>
            <Col
              lg={6}
              md={6}
              sm={10}
              xs={12}
              // className="font-icon-list"
              // key={i}
            >
              <Card
                title="Link Count vs Like Count"
                category={`eML Comparative Analysis for the ${this.state.industry} Category`}
                content={
                  <img
                    className="d-block alignItemsCenter"
                    src={`https://engagementmlapp.s3.amazonaws.com/${this.state.industry}/Link_Count_VS_Like_Count.jpeg`}
                    alt="Link Count vs Like Count"
                    width="400"
                  />
                }
              />
            </Col>
            <Col
              lg={6}
              md={6}
              sm={10}
              xs={12}
              // className="font-icon-list"
              // key={i}
            >
              <Card
                title="Text Length vs Hashtag Count"
                category={`eML Comparative Analysis for the ${this.state.industry} Category`}
                content={
                  <img
                    className="d-block alignItemsCenter"
                    src={`https://engagementmlapp.s3.amazonaws.com/${this.state.industry}/Text_Lenght_VS_Hashtag_Count.jpeg`}
                    alt="Text Length vs Hashtag Count"
                    width="400"
                  />
                }
              />
            </Col>
            <Col
              lg={6}
              md={6}
              sm={10}
              xs={12}
              // className="font-icon-list"
              // key={i}
            >
              <Card
                title="Text Length vs Like Count"
                category={`eML Comparative Analysis for the ${this.state.industry} Category`}
                content={
                  <img
                    className="d-block alignItemsCenter"
                    src={`https://engagementmlapp.s3.amazonaws.com/${this.state.industry}/Text_Length_Vs_Like_Count.jpeg`}
                    alt="Text Length vs Like Count"
                    width="400"
                  />
                }
              />
            </Col>
            <Col
              lg={6} // Width
              md={6} 
              sm={10}
              xs={12}
              // className="font-icon-list"
              // key={i}
            >
              <Card
                title="Followers vs Likes by Business Category"
                category={`eML Comparative Analysis for the ${this.state.industry} Category`}
                content={
                  <img
                    className="d-block alignItemsCenter"
                    src={`https://engagementmlapp.s3.amazonaws.com/${this.state.industry}/Followers_Vs_Like_Count_-_Segmented_by_Business_Categories.jpeg`}
                    alt="Followers vs Likes by Business Category"
                    width="450"
                  />
                }
              />
            </Col>
          </Row>

          

          <Row>

          <Col
              // The following is the same as col-lg-6 col-md-6 col-sm-10 col-12
              lg={6} // Width
              md={6} 
              sm={10}
              xs={12}
              // className="font-icon-list"
              // key={i}
            >
             
                {/* title="Followers vs Likes by Business Category"
                category={`eML Comparative Analysis for the ${this.state.industry} Category`} */}
               

                   {/* <div className="row d-flex justify-content-around">  */}

                    {/* <div style={{ width: "25rem", border:"0", boxShadow:"0" }}> */}
                    <div style={{marginBottom:"2rem"}}>
                        <div className="g-card m-2"  style={{ width: "32rem"}}>
                          {/* For full width Do 60rem for width above and 30rem for height on g card */}
                            <div className="card-container">
                                <div className="card-front">
                                    <img className="card-img-top" src={`https:engagementmlapp.s3.amazonaws.com/${this.state.industry}/Followers_Vs_Like_Count_-_Segmented_by_Business_Categories.jpeg`} alt="Card image cap" />
                                    <div className="card-body d-flex align-items-center justify-content-center">
                                        <p className="card-text">Flip me!</p>
                                    </div>
                                </div>
                                <div className="card-back d-flex flex-row justify-content-center">
                                    <div className="backContent">
                                    <div className="card-text backTitle">Followers vs Likes in  {this.state.industry} Industry</div>
                                        <br></br>
                                        <div className="card-text backInfo">This is the back2</div>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>

                    {/* </div> */}

                   {/* </div> */}


            </Col>

          </Row>

       


        </Container>
      </div>
    );
  }
}

export default Research;
