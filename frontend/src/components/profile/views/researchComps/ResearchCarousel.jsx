
import React, { Component } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
// import axios from "axios"
import Card from "../../components/Card/Card.jsx";

// axios.get("http://localhost:5000/profiles").then(res => console.log(res.data));

class Research extends Component {

  render() {
  
    return (
      <div className="content" style={{height:"100vh"}}>

<Container fluid="true">
          <Row>
            <Col md={12}>
              <Card
                title="EngagementML Research Model"
                category="SoMe + Machine Learning = <3"
                content={

<Carousel>
  <Carousel.Item>

    <img
      className="d-block alignItemsCenter"
      src="https://egagementml.s3.us-east-1.amazonaws.com/Followers%20VS%20Video%20View%20Counts.png"
      alt="Followers Vs Likes"
    />

  </Carousel.Item>
  <Carousel.Item>

    <img
      className="d-block alignItemsCenter"
      src="https://egagementml.s3.us-east-1.amazonaws.com/Followers%20Vs%20Likes.png"
      alt="Followers vs Video View Counts"
    />

  </Carousel.Item>
  <Carousel.Item>

    <img
      className="d-block alignItemsCenter"
      src="https://egagementml.s3.us-east-1.amazonaws.com/Follwers%20VS%20Comment%20Counts.png"
      alt="Followers vs Comment Counts"
    />

  </Carousel.Item>

  <Carousel.Item>

    <img
      className="d-block alignItemsCenter"
      src="https://egagementml.s3.amazonaws.com/Text+Length+VS+Hashtag+Count.png"
                      alt="Text vs Hashtag"
    />

  </Carousel.Item>

  <Carousel.Item>

    <img
      className="d-block alignItemsCenter"
      src="https://egagementml.s3.us-east-1.amazonaws.com/Link%20Count%20VS%20Like%20Count.png"
      alt="Links vs Likes"
    />

  </Carousel.Item>

  <Carousel.Item>

    <img
      className="d-block alignItemsCenter"
      src="https://egagementml.s3.us-east-1.amazonaws.com/Text%20Length%20VS%20Hashtag%20Count.png"
                      alt="Text Length vs Hashtag Count"
    />

  </Carousel.Item>

  <Carousel.Item>

    <img
      className="d-block alignItemsCenter"
      src="https://egagementml.s3.us-east-1.amazonaws.com/Correlation%20Matrix.png"
      alt="Correlation"
    />

  </Carousel.Item>

</Carousel>

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
