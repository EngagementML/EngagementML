import React, { Component } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "../components/Card/Card";
import logo from "../../../images/engagementMLb.png";
import axios from "axios";
import actions from "../../../services/index";
import logo2 from "../assets/img/emllogo.png";



class Posts extends Component {
  state = {
    postCount: 12
  };

  async componentDidMount() {
    let user = await actions.isLoggedIn();
    this.setState({ ...user.data });
    // console.log("Current User >> ", user);

    await axios
      // .get("http://localhost:5000/profile/" + this.state.igUsername)
      .get(
        "https://aqueous-wave-46255.herokuapp.com/https://engagementml.herokuapp.com/profile/" +
          this.state.igUsername
      )
      .then((res) => {
        // console.log(res, res.data);
        this.setState({
          profile: res.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    await axios
      .get(
        "https://aqueous-wave-46255.herokuapp.com/https://engagementml.herokuapp.com/posts/" +
          this.state.profile.id
      )
      .then((res) => {
        // console.log(res, res.data);
        this.setState({
          posts: res.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    await axios
      // .get("http://localhost:5000/eML/user/" + this.props.match.params.id)
      .get(
        "https://aqueous-wave-46255.herokuapp.com/https://engagementml.herokuapp.com/eML/user/" +
          this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          email: res.data.email,
          name: res.data.name,
          fname: res.data.fname,
          lname: res.data.lname,
          igUsername: res.data.igUsername,
          image: res.data.image,
          about: res.data.about,
          industry: res.data.industry,
          // role: res.data.role,
          // competitor: res.data.competitor,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  renderDate = postDate => {
    let a = new Date(postDate * 1000);
    let year = Number(
      a
        .getFullYear()
        .toString()
        .slice(2, 4)
    );
    let month = a.getMonth() + 1;
    let date = a.getDate();
    let time = month + "/" + date + "/" + year;
    return String(time);
  };

  renderTime = postDate => {
    let a = new Date(postDate * 1000);
    let hours = a.getHours();
    hours = hours % 12 || 12;
    let AmOrPm = hours >= 12 ? "pm" : "am";
    let minutes = "0" + a.getMinutes();
    // let seconds = "0" + a.getSeconds();
    // let time = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2) + AmOrPm
    let time = hours + ":" + minutes.substr(-2) + " " + AmOrPm;

    return String(time);
  };

  renderDay = postDate => {
    let a = new Date(postDate * 1000);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let dayOfWeek = days[a.getDay()];
    return dayOfWeek;
  };

  onImgErrorSmall = e => {
    console.log(e.target);
    e.target.src =
      "https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg";
    // disable onerror to prevent endless loop
    e.target.onError = "";
    return true;
  };

  postList() {
    return this.state.posts.slice(0, this.state.postCount).map((posts, i) => {
      return (
        <Col lg={3} md={4} sm={6} xs={12} className="font-icon-list" key={i}>
          <div style={{ marginBottom: "2rem" }}>
            <div className="g-card m-2" style={{ height: "70vh" }}>
              {/* For full width Do 60rem for width above and 30rem for height on g card */}
              <div className="card-container">
                <div className="card-front  d-flex flex-column justify-content-between">
                  <img
                    className="card-img-top img-fluid"
                    onError={e => this.onImgErrorSmall(e)}
                    alt={this.state.profile.username}
                    // style={{ width: "100%" }}
                    src={posts.thumbnail}
                  />
                  <div
                    className="card-body d-flex align-items-center justify-content-center"
                    style={{ background: "white" }}
                  >
                    <div className="card-text">
                      <h5>
                        <strong>Post eML Rate: </strong>{" "}
                        {(
                          ((Number(posts.like_count) +
                            Number(posts.comment_count)) /
                            Number(this.state.profile.edge_followed_by.count)) *
                          100
                        ).toFixed(2)}
                        %
                      </h5>
                      <i className="pe-7s-leaf text-success" />
                      <br />
                      <br />
                      <h6>
                        <strong>Like Count:</strong>{" "}
                        {posts.like_count.toLocaleString(navigator.language, {
                          minimumFractionDigits: 0
                        })}
                        <br />
                        <br />
                        <strong>Comment Count: </strong>{" "}
                        {posts.comment_count.toLocaleString(
                          navigator.language,
                          { minimumFractionDigits: 0 }
                        )}
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="card-back d-flex flex-row justify-content-center">
                  <div className="backContent" style={{ overflowY: "scroll" }}>
                    <div className="card-text backTitle">
                      <h4>{this.state.profile.username}</h4>
                      <h5>{this.state.profile.full_name}</h5>
                      <br />
                      <strong>Date Posted</strong>
                      <br />
                      {this.renderDate(posts.date)}
                      <br />
                      <br />
                      <h5><strong>Day</strong> - {this.renderDay(posts.date)}
                      <br />
                      <strong>Time</strong> - {this.renderTime(posts.date)}</h5>
                    </div>
                    <br></br>
                    <p>{posts.text}</p>
                    {/* <div className="card-text backInfo">
                      <strong>Likes:</strong>{" "}
                      {posts.like_count.toLocaleString(navigator.language, {
                        minimumFractionDigits: 0
                      })}
                      <br />
                      <br />
                      <p>
                        {" "}
                        <strong>Comments: </strong>{" "}
                        {posts.comment_count.toLocaleString(
                          navigator.language,
                          { minimumFractionDigits: 0 }
                        )}
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      );
    });
  }

  viewMore = e => {
    let count = this.state.postCount;
    let newCount = count + 8;
    this.setState({
      postCount: newCount
    });
  };

  render() {
    if (this.state.profile !== undefined && this.state.posts !== undefined) {
      return (
        <div className="content">
          <Container fluid="true">
            <Row>
              <Col
                lg={12}
                md={12}
                sm={12}
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingBottom: "15px"
                }}
              >
                <h2>Post Engagement Analysis</h2>
              </Col>
              <Col md={12}>
                <Card
                  title={
                    <React.Fragment>
                      <img
                        src={logo}
                        alt="EngagementML"
                        width="70%"
                        height="70%"
                      />
                    </React.Fragment>
                  }
                  ctAllIcons
                  category="Additional Metrics Coming Soon!"
                  content={
                    <>
                      <Row>{this.postList()}</Row>
                      <br />
                      <Button
                        onClick={e => this.viewMore(e)}
                        variant="primary"
                        className="btn-primary"
                      >
                        View More
                      </Button>
                      <br />
                      <br />
                    </>
                  }
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    } else {
      return (
        <div>
          <h3 className="loading" style={{ textAlign: "center" }}>
            Loading...
          </h3>
          <img
            src={logo2}
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

export default Posts;