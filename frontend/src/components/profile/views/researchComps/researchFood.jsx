
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import axios from "axios"
import Card from "../components/Card/Card.jsx";

// axios.get("http://localhost:5000/profiles").then(res => console.log(res.data));

class Research extends Component {

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
                title="General Post Recomendations"
                category="eML Recommendations"
                content={
                  <img
                    className="d-block alignItemsCenter"
                    src="https://egagementml.s3.amazonaws.com/post+general+recommendations.jpg"
                    alt="Followers Vs Likes"
                    height="105"
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
                title="Daily Post Optimizations"
                category="eML Recommendations"
                content={
                  <img
                    className="d-block alignItemsCenter"
                    src="https://egagementml.s3.amazonaws.com/post+per+day+recommendation.jpg"
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
                title="Weekly Post Optimizations"
                category="eML Recommendations"
                content={
                  <img
                    className="d-block alignItemsCenter"
                    src="https://egagementml.s3.amazonaws.com/post+per+hour+recommendation.jpg"
                    alt="Followers Vs Likes"
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
                title="Correlation Matrix"
                category="eML Comparative Analysis"
                content={
                  <img
                    className="d-block alignItemsCenter"
                    src="https://egagementml.s3.us-east-1.amazonaws.com/Correlation%20Matrix.png"
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
                title="Word Cloud"
                category="eML Comparative Analysis"
                content={
                  <img
                    className="d-block alignItemsCenter"
                    src="https://egagementml.s3.amazonaws.com/wordcloud+food+.png"
                    alt="Word Cloud"
                    width="350"
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
                title="Followers vs Video Views"
                category="eML Comparative Analysis"
                content={
                  <img
                    className="d-block alignItemsCenter"
                    src="https://egagementml.s3.us-east-1.amazonaws.com/Followers%20VS%20Video%20View%20Counts.png"
                    alt="Followers Vs Likes"
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
                title="Followers Vs Likes"
                category="eML Comparative Analysis"
                content={
                  <img
                    className="d-block alignItemsCenter"
                    src="https://egagementml.s3.us-east-1.amazonaws.com/Followers%20Vs%20Likes.png"
                    alt="Followers Vs Likes"
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
                title="Followers vs Comment Counts"
                category="eML Comparative Analysis"
                content={
                  <img
                    className="d-block alignItemsCenter"
                    src="https://egagementml.s3.us-east-1.amazonaws.com/Follwers%20VS%20Comment%20Counts.png"
                    alt="Followers vs Comment Counts"
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
                title="Text vs Hashtag"
                category="eML Comparative Analysis"
                content={
                  <img
                    className="d-block alignItemsCenter"
                    src="https://egagementml.s3.amazonaws.com/Text+Length+VS+Hashtag+Count.png"
                    alt="Text vs Hashtag"
                    width="400"
                  />
                }
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
        }
      }

export default Research;
