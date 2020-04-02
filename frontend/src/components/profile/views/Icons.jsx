import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from 'axios'
import Card from "../components/Card/Card";
// import { iconsArray } from "../variables/Variables.jsx";

// axios.get("http://localhost:5000/profiles").then(res => console.log(res.data));


class Icons extends Component {
  state = {};

  async componentDidMount() {
    let user = await actions.isLoggedIn();
    this.setState({ ...user.data });
    
    await axios
      // .get("http://localhost:5000/profiles/")
      .get(
        "https://engagementml.herokuapp.com/profiles/"
      )
      .then(res => {
        // console.log(res, res.data);
        this.setState({
          profiles: res.data,
          filteredItems: res.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });

    await axios
      .get(
        "https://engagementml.herokuapp.com/posts/"
      )
      .then(res => {
        // console.log(res, res.data);
        this.setState({
          posts: res.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  filterProfiles = e => {
    // console.log(this.props);
    // eslint-disable-next-line
    let filteredItems = this.state.profiles.filter(profile => {
      // eslint-disable-next-line
      if (profile.username) {
        return (
          profile.username
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          profile.full_name
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          profile.emlcategory
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        );
      }
    });
    this.setState({
      filteredItems,
      search: e.target.value
    });
    // console.log(filteredItems, filteredItems.length);
  };
  
  onImgErrorSmall = e => {
    console.log(e.target);
    e.target.src =
      "https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg";
    // disable onerror to prevent endless loop
    e.target.onError = "";
    return true;
  };

  showPosts = e => {
    // console.log('Selected IG Username', e.target.value)
    this.props.history.push(`/profile/admin/iconposts/${e.target.value}`);
  }

  profileList() {
    return this.state.filteredItems.map((profile, i) => {
      return (
        <Col lg={3} md={4} sm={6} xs={12} className="font-icon-list" key={i}>
          <div style={{ marginBottom: "2rem" }}>
            <div className="g-card m-2" style={{ height: "27rem" }}>
              {/* For full width Do 60rem for width above and 30rem for height on g card */}
              <div className="card-container">
                <div className="card-front  d-flex flex-column justify-content-between">
                  <img
                    className="card-img-top img-fluid"
                    alt={profile.username}
                    onError={e => this.onImgErrorSmall(e)}
                    // style={{ width: "100%" }}
                    src={profile.profile_pic_url_hd}
                  />
                  <div
                    className="card-body d-flex align-items-center justify-content-center"
                    style={{ background: "white" }}
                  >
                    <div className="card-text">
                      <h4>{profile.username}</h4>
                      <br />
                      <h6>
                        #{i + 1} {profile.full_name}
                      </h6>
                    </div>
                  </div>
                </div>
                <div
                  className="card-back d-flex flex-row justify-content-center"
                  style={{ overflowY: "scroll" }}
                >
                  <div className="backContent">
                    <div className="card-text backTitle">
                      <h4>{profile.full_name}</h4>
                    </div>
                    <br></br>
                    <p>{profile.biography}</p>
                    <div className="card-text backInfo">
                      <strong>Followers:</strong>{" "}
                      {profile.edge_followed_by.count.toLocaleString(
                        navigator.language,
                        { minimumFractionDigits: 0 }
                      )}
                      <br />
                      <br />
                      <p>
                        {" "}
                        <strong>Total Posts: </strong>{" "}
                        {profile.edge_owner_to_timeline_media.count.toLocaleString(
                          navigator.language,
                          { minimumFractionDigits: 0 }
                        )}
                      </p>
                      <br/>
                      <Button
                        value={profile.username}
                        onClick={e => this.showPosts(e)}
                        variant="warning"
                        className="btn"
                      >
                        View Posts
                      </Button>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="font-icon-detail">
            <h4>{profile.username}</h4>
            <br /> */}
          {/* <br /> */}
          {/* <img
              alt={profile.username}
              style={{ width: "100%" }}
              src={profile.profile_pic_url_hd}
            />
            <br />
            <br />
            <h6>{profile.full_name}</h6>
            <br />
            <p>
              <strong>Followers:</strong>{" "}
              {profile.edge_followed_by.count.toLocaleString(
                navigator.language,
                { minimumFractionDigits: 0 }
              )}
            </p>
          </div> */}
        </Col>
      );
    });
  }

  render() {
    // console.log("this is props pon di icon page >>", this.props.profiles);
    if (this.state.profiles !== undefined) {
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
                <h2>Search IG Influencers</h2>
              </Col>
              <Col md={12}>
                <Card
                  title="Tracking List - IG Influencers"
                  ctAllIcons
                  category={
                    <React.Fragment>
                      <span>
                        Crafted by AI from{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://engagementml.herokuapp.com"
                        >
                          EngagementML
                        </a>
                      </span>
                      <br />
                      <br />

                      <input
                        value={this.state.search}
                        onChange={e => this.filterProfiles(e)}
                        type="text"
                        placeholder="Search for your influencer..."
                        // className="form-scontrol home"
                      />
                    </React.Fragment>
                  }
                  content={<Row>{this.profileList()}</Row>}
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
        </div>
      );
    }
  }
}

export default Icons;
