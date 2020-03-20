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
import { Container, Row, Col } from "react-bootstrap";
// import axios from "axios"
import Card from "../components/Card/Card.jsx";

// axios.get("http://localhost:5000/profiles").then(res => console.log(res.data));

class Research extends Component {

  render() {
  
    return (
      <div className="content">
        <Container fluid="true">
          <Row>
            <Col md={12}>
              <Card
                title="EngagementML Research Model"
                category="SoMe + Machine Learning = <3"
                content={
                  <div>
                    <h3>eML - Post Analysis</h3>
                    <img
                      src="https://egagementml.s3.amazonaws.com/post+analysis.png"
                      alt="Post Analysis"
                    />
                    <br />
                    <br />
                    <h3>eML - Post General Recommendations</h3>
                    <img
                      src="https://egagementml.s3.amazonaws.com/post+general+recommendations.jpg"
                      alt="Post General Recommendations"
                    />
                    <br />
                    <br />
                    <h3>eML - Post Per Day Recommendations</h3>
                    <img
                      src="https://egagementml.s3.amazonaws.com/post+per+day+recommendation.jpg"
                      alt="Post Per Day Recommendations"
                    />
                    <br />
                    <br />
                    <h3>eML - Post Per Hour</h3>
                    <img
                      src="https://egagementml.s3.amazonaws.com/post+per+hour+recommendation.jpg"
                      alt="Post Per Hour Recommendations"
                    />
                    <br />
                    <br />
                    <h3>WordCloud</h3>
                    <img
                      src="https://egagementml.s3.amazonaws.com/wordcloud+food+.png"
                      alt="Word Cloud"
                    />
                    <br />
                    <br />
                    <h4>Followers vs Video View Counts</h4>
                    <img
                      src="https://egagementml.s3.us-east-1.amazonaws.com/Followers%20VS%20Video%20View%20Counts.png"
                      alt="Followers Vs Likes"
                    />
                    <br />
                    <br />
                    <h4>Followers vs Likes</h4>
                    <img
                      src="https://egagementml.s3.us-east-1.amazonaws.com/Followers%20Vs%20Likes.png"
                      alt="Followers vs Video View Counts"
                    />
                    <br />
                    <br />
                    <h4>Followers vs Comment Counts</h4>
                    <img
                      src="https://egagementml.s3.us-east-1.amazonaws.com/Follwers%20VS%20Comment%20Counts.png"
                      alt="Followers vs Comment Counts"
                    />
                    <br />
                    <br />
                    <h4>Text Length vs Hashtag Counts</h4>
                    <img
                      src="https://egagementml.s3.amazonaws.com/Text+Length+VS+Hashtag+Count.png"
                      alt="Text vs Hashtag"
                    />
                    <br />
                    <br />
                    <h4>Links vs Likes</h4>
                    <img
                      src="https://egagementml.s3.us-east-1.amazonaws.com/Link%20Count%20VS%20Like%20Count.png"
                      alt="Links vs Likes"
                    />
                    <br />
                    <br />
                    <h4>Text Length vs Hashtag Count</h4>
                    <img
                      src="https://egagementml.s3.us-east-1.amazonaws.com/Text%20Length%20VS%20Hashtag%20Count.png"
                      alt="Text Length vs Hashtag Count"
                    />
                    <br />
                    <br />
                    <h4>eML Correlation Matrix</h4>
                    <img
                      src="https://egagementml.s3.us-east-1.amazonaws.com/Correlation%20Matrix.png"
                      alt="Correlation"
                    />
                    {/* <div className="typo-line">
                      <h4>
                        <p className="category">Track-them</p>Light Bootstrap
                        Table Heading
                      </h4>
                    </div> */}
                    {/* <div className="typo-line">
                      <h1>
                        <p className="category">Header 1</p>Light Bootstrap
                        Table Heading{" "}
                      </h1>
                    </div>

                    <div className="typo-line">
                      <h2>
                        <p className="category">Header 2</p>Light Bootstrap
                        Table Heading
                      </h2>
                    </div>
                    <div className="typo-line">
                      <h3>
                        <p className="category">Header 3</p>Light Bootstrap
                        Table Heading
                      </h3>
                    </div>

                    <div className="typo-line">
                      <h5>
                        <p className="category">Header 5</p>Light Bootstrap
                        Table Heading
                      </h5>
                    </div> */}
                    {/* <div className="typo-line">
                      <h6>
                        <p className="category">Header 6</p>Light Bootstrap
                        Table Heading
                      </h6>
                    </div>
                    <div className="typo-line">
                      <p>
                        <span className="category">Paragraph</span>Lorem ipsum
                        dolor sit amet, consectetuer adipiscing elit, sed diam
                        nonummy nibh euismod tincidunt ut laoreet dolore magna
                        aliquam erat volutpat. Ut wisi enim ad minim veniam.
                      </p>
                    </div>
                    <div className="typo-line">
                      <p className="category">Quote</p>
                      <blockquote>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat volutpat. Ut wisi
                          enim ad minim veniam.
                        </p>
                        <small>Steve Jobs, CEO Apple</small>
                      </blockquote>
                    </div> */}
                    {/* <div className="typo-line">
                      <p className="category">Muted Text</p>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet.
                      </p>
                    </div> */}
                    {/* <div className="typo-line"> */}
                    {/* <!--
                                             there are also "text-info", "text-success", "text-warning", "text-danger" clases for the text
                                             --> */}
                    {/* <p className="category">Coloured Text</p>
                      <p className="text-primary">
                        Text Primary - Light Bootstrap Table Heading and complex
                        bootstrap dashboard you've ever seen on the internet.
                      </p>
                      <p className="text-info">
                        Text Info - Light Bootstrap Table Heading and complex
                        bootstrap dashboard you've ever seen on the internet.
                      </p>
                      <p className="text-success">
                        Text Success - Light Bootstrap Table Heading and complex
                        bootstrap dashboard you've ever seen on the internet.
                      </p>
                      <p className="text-warning">
                        Text Warning - Light Bootstrap Table Heading and complex
                        bootstrap dashboard you've ever seen on the internet.
                      </p>
                      <p className="text-danger">
                        Text Danger - Light Bootstrap Table Heading and complex
                        bootstrap dashboard you've ever seen on the internet.
                      </p>
                    </div> */}
                    {/* <div className="typo-line">
                      <h2>
                        <p className="category">Small Tag</p>Header with small
                        subtitle <br />
                        <small>".small" is a tag for the headers</small>{" "}
                      </h2>
                    </div> */}
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

export default Research;
