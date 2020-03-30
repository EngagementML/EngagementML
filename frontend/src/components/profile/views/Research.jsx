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
      <div className="content" >
        <Container fluid="true">
        
            <Row>
          <Col
              // The following is the same as col-lg-6 col-md-6 col-sm-10 col-12
              lg={4}
              md={12}
              sm={12}
              xs={12}
              style={{display:"flex", justifyContent:"center"}}  
            >
             
                    <div style={{marginBottom:"2rem"}}>
                        <div className="g-card m-2"  style={{ width: "25rem", height: "16rem"}}>
                          {/* For full width Do 60rem for width above and 30rem for height on g card */}
                            <div className="card-container">
                                <div className="card-front  d-flex flex-column justify-content-between">
                                    <img className="card-img-top img-fluid" src={`https:engagementmlapp.s3.amazonaws.com/${this.state.industry}/Followers_VS_Likes.jpeg`} alt="Card image cap" />
                                    <div className="card-body d-flex align-items-center justify-content-center">
                                        <p className="card-text">Flip me!</p>
                                    </div>
                                </div>
                                <div className="card-back d-flex flex-row justify-content-center">
                                    <div className="backContent">
                                    <div className="card-text backTitle">Followers vs Likes in the {this.state.industry} Industry</div>
                                        <br></br>
                                        <div className="card-text backInfo">{`eML Comparative Analysis for the ${this.state.industry} Category`}</div>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>


            </Col>

          <Col
              // The following is the same as col-lg-6 col-md-6 col-sm-10 col-12
              lg={4}
              md={12}
              sm={12}
              xs={12}
              style={{display:"flex", justifyContent:"center"}}  
            >
             
                    <div style={{marginBottom:"2rem"}}>
                        <div className="g-card m-2"  style={{ width: "25rem", height: "16rem"}}>
                          {/* For full width Do 60rem for width above and 30rem for height on g card */}
                            <div className="card-container">
                                <div className="card-front  d-flex flex-column justify-content-between">
                                    <img className="card-img-top img-fluid" src={`https:engagementmlapp.s3.amazonaws.com/${this.state.industry}/Followers_VS_Comments_Counts.jpeg`} alt="Card image cap" />
                                    <div className="card-body d-flex align-items-center justify-content-center">
                                        <p className="card-text">Flip me!</p>
                                    </div>
                                </div>
                                <div className="card-back d-flex flex-row justify-content-center">
                                    <div className="backContent">
                                    <div className="card-text backTitle">Followers vs Comments in the {this.state.industry} Industry</div>
                                        <br></br>
                                        <div className="card-text backInfo">{`eML Comparative Analysis for the ${this.state.industry} Category`}</div>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>


            </Col>

             {/* Col #3 */}
          <Col
              // The following is the same as col-lg-6 col-md-6 col-sm-10 col-12
              lg={4}
              md={12}
              sm={12}
              xs={12}
              style={{display:"flex", justifyContent:"center"}}  
            >
             
               
                    <div style={{marginBottom:"2rem"}}>
                        <div className="g-card m-2"  style={{ width: "25rem", height: "16rem"}}>
                          {/* For full width Do 60rem for width above and 30rem for height on g card */}
                            <div className="card-container">
                                <div className="card-front  d-flex flex-column justify-content-between">
                                    <img className="card-img-top img-fluid" src={`https:engagementmlapp.s3.amazonaws.com/${this.state.industry}/Followers_VS_Video_view_Count.jpeg`} alt="Card image cap" />
                                    <div className="card-body d-flex align-items-center justify-content-center">
                                        <p className="card-text">Flip me!</p>
                                    </div>
                                </div>
                                <div className="card-back d-flex flex-row justify-content-center">
                                    <div className="backContent">
                                    <div className="card-text backTitle">Followers vs Video View Count in the {this.state.industry} Industry</div>
                                        <br></br>
                                        <div className="card-text backInfo">{`eML Comparative Analysis for the ${this.state.industry} Category`}</div>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>


            </Col>

          <Col
              // The following is the same as col-lg-6 col-md-6 col-sm-10 col-12
              lg={4}
              md={12}
              sm={12}
              xs={12}
              style={{display:"flex", justifyContent:"center"}}  
            >
             
                    <div style={{marginBottom:"2rem"}}>
                        <div className="g-card m-2"  style={{  width: "25rem", height: "16rem"}}>
                          {/* For full width Do 60rem for width above and 30rem for height on g card */}
                            <div className="card-container">
                                <div className="card-front  d-flex flex-column justify-content-between">
                                    <img className="card-img-top img-fluid" src={`https:engagementmlapp.s3.amazonaws.com/${this.state.industry}/Link_Count_VS_Like_Count.jpeg`} alt="Card image cap" />
                                    <div className="card-body d-flex align-items-center justify-content-center">
                                        <p className="card-text">Flip me!</p>
                                    </div>
                                </div>
                                <div className="card-back d-flex flex-row justify-content-center">
                                    <div className="backContent">
                                    <div className="card-text backTitle">Link Count VS Like Count in the {this.state.industry} Industry</div>
                                        <br></br>
                                        <div className="card-text backInfo">{`eML Comparative Analysis for the ${this.state.industry} Category`}</div>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>


            </Col>

          <Col
              // The following is the same as col-lg-6 col-md-6 col-sm-10 col-12
              lg={4}
              md={12}
              sm={12}
              xs={12}
              style={{display:"flex", justifyContent:"center"}}  
            >
             
               
                    <div style={{marginBottom:"2rem"}}>
                        <div className="g-card m-2"  style={{  width: "25rem", height: "16rem"}}>
                          {/* For full width Do 60rem for width above and 30rem for height on g card */}
                            <div className="card-container">
                                <div className="card-front  d-flex flex-column justify-content-between">
                                    <img className="card-img-top img-fluid" src={`https:engagementmlapp.s3.amazonaws.com/${this.state.industry}/Text_Lenght_VS_Hashtag_Count.jpeg`} alt="Card image cap" />
                                    <div className="card-body d-flex align-items-center justify-content-center">
                                        <p className="card-text">Flip me!</p>
                                    </div>
                                </div>
                                <div className="card-back d-flex flex-row justify-content-center">
                                    <div className="backContent">
                                    <div className="card-text backTitle">Text Length vs Hashtag Count in the {this.state.industry} Industry</div>
                                        <br></br>
                                        <div className="card-text backInfo">{`eML Comparative Analysis for the ${this.state.industry} Category`}</div>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>

            </Col>

             {/* Col #3 */}
          <Col
              // The following is the same as col-lg-6 col-md-6 col-sm-10 col-12
              lg={4}
              md={12}
              sm={12}
              xs={12}
              style={{display:"flex", justifyContent:"center"}}            
          >
             
                    <div style={{marginBottom:"2rem"}}>
                        <div className="g-card m-2"  style={{  width: "25rem", height: "16rem"}}>
                          {/* For full width Do 60rem for width above and 30rem for height on g card */}
                            <div className="card-container">
                                <div className="card-front  d-flex flex-column justify-content-between">
                                    <img className="card-img-top img-fluid" src={`https:engagementmlapp.s3.amazonaws.com/${this.state.industry}/Text_Length_Vs_Like_Count.jpeg`} alt="Card image cap" />
                                    <div className="card-body d-flex align-items-center justify-content-center">
                                        <p className="card-text">Flip me!</p>
                                    </div>
                                </div>
                                <div className="card-back d-flex flex-row justify-content-center">
                                    <div className="backContent">
                                    <div className="card-text backTitle">Text Length vs Like Count in the {this.state.industry} Industry</div>
                                        <br></br>
                                        <div className="card-text backInfo">{`eML Comparative Analysis for the ${this.state.industry} Category`}</div>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>


            </Col>

          <Col
              // The following is the same as col-lg-6 col-md-6 col-sm-10 col-12
              lg={6} // Width
              md={12} 
              sm={12}
              xs={12}
              style={{display:"flex", justifyContent:"center"}}
            >
             
                    <div style={{marginBottom:"2rem"}}>
                        <div className="g-card m-2"  style={{ width: "24rem", height: "27rem"}}>
                          {/* For full width Do 60rem for width above and 30rem for height on g card */}
                            <div className="card-container">
                                <div className="card-front  d-flex flex-column justify-content-between">
                                    <img className="card-img-top img-fluid" src={`https:engagementmlapp.s3.amazonaws.com/${this.state.industry}/Correlation_Matrix.jpeg`} alt="Card image cap" />
                                    <div className="card-body d-flex align-items-center justify-content-center" style={{background:"white"}}>
                                        <p className="card-text">Flip me!</p>
                                    </div>
                                </div>
                                <div className="card-back d-flex flex-row justify-content-center">
                                    <div className="backContent">
                                    <div className="card-text backTitle">Correlation matrix in the {this.state.industry} Industry</div>
                                        <br></br>
                                        <div className="card-text backInfo">{`eML Comparative Analysis for the ${this.state.industry} Category`}</div>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>


            </Col>

         
            

          <Col
              // The following is the same as col-lg-6 col-md-6 col-sm-10 col-12
              lg={6} // Width
              md={12} 
              sm={12}
              xs={12}
              style={{display:"flex", justifyContent:"center"}}
            >
             
               
                    <div style={{marginBottom:"2rem"}}>
                        <div className="g-card m-2"  style={{ width: "25rem",height: "27rem"}}>
                          {/* For full width Do 60rem for width above and 30rem for height on g card */}
                            <div className="card-container">
                                <div className="card-front  d-flex flex-column justify-content-between">
                                    <img className="card-img-top img-fluid" src={`https:engagementmlapp.s3.amazonaws.com/${this.state.industry}/word_cloud.jpeg`} alt="Card image cap" />
                                    <div className="card-body d-flex align-items-center justify-content-center" style={{background:"white"}}>
                                        <p className="card-text">Flip me!</p>
                                    </div>
                                </div>
                                <div className="card-back d-flex flex-row justify-content-center">
                                    <div className="backContent">
                                    <div className="card-text backTitle">Key Words in the {this.state.industry} Industry</div>
                                        <br></br>
                                        <div className="card-text backInfo">{`eML Comparative Analysis for the ${this.state.industry} Category`}</div>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>


            </Col>
          <Col
              // The following is the same as col-lg-6 col-md-6 col-sm-10 col-12
              lg={12} // Width
              md={12} 
              sm={12}
              xs={12}
              style={{display:"flex", justifyContent:"center"}}
            >
             
               
                    <div className="d-flex justify-content-center" style={{marginBottom:"2rem"}}>
                        <div className="g-card m-2"  style={{ width: "40rem", height: "20rem"}}>
                          {/* For full width Do 60rem for width above and 30rem for height on g card */}
                            <div className="card-container">
                                <div className="card-front  d-flex flex-column justify-content-between">
                                    <img className="card-img-top img-fluid" src={`https:engagementmlapp.s3.amazonaws.com/${this.state.industry}/Followers_Vs_Like_Count_-_Segmented_by_Business_Categories.jpeg`} alt="Card image cap" />
                                    <div className="card-body d-flex align-items-center justify-content-center" style={{background:"white"}}>
                                        <p className="card-text">Flip me!</p>
                                    </div>
                                </div>
                                <div className="card-back d-flex flex-row justify-content-center">
                                    <div className="backContent">
                                    <div className="card-text backTitle">Followers vs Likes in  {this.state.industry} Industry</div>
                                        <br></br>
                                        <div className="card-text backInfo">{`eML Comparative Analysis for the ${this.state.industry} Category`}</div>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>


            </Col>


          </Row>


        </Container>
      </div>
    );
  }
}

export default Research;


