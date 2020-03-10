import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

class HomeComp extends Component {
  render() {
    return (
      <React.Fragment>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/random/1600x800?instagram"
              alt="First slide"
            />
            <Carousel.Caption>
              <h2>GucciPlate</h2>
              <p>We don't play with avocados, we eat them</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/random/1600x800?facebook"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h2>GucciPlate</h2>
              <p> And they are delicious</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/random/1600x800?computer"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h2>GucciPlate</h2>
              <p>That's now a spanish avocado :)</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="container">
          <div
            className="row featurette"
            style={{ paddingBottom: "50px", paddingTop: "40px" }}
            id="howTo"
          >
            <div
              className="col-md-7"
              style={{ paddingTop: "40px", paddingBottom: "40px" }}
            >
              <br />
              <h2 className="featurette-heading">
                What is <span className="text-muted">GucciPlate?</span>
              </h2>
              <p className="lead">
                Very simple! It is a react bootstraped with bunch of gumbo, love
                and a few other spices.
              </p>
              <a href="/#top">
                <button className="btn btn-success center">Learn More</button>
              </a>
              <br />
            </div>
            <div
              className="col-md-5"
              style={{ paddingTop: "40px", paddingBottom: "40px" }}
            >
              <img
                className="featurette-image img-fluid mx-auto"
                src="https://source.unsplash.com/random/1600x800?learning"
                alt="Avocado"
              />
            </div>
          </div>
          <hr
            className="featurette-divider"
            style={{ paddingTop: "40px", paddingBottom: "40px" }}
          />
          <div className="container">
            <img
              className="featurette-image img-fluid mx-auto"
              src="https://source.unsplash.com/random/1600x800?modern"
              alt=""
            />
          </div>
          <br></br>
          <br></br>
          <hr
            className="featurette-divider"
            style={{ paddingTop: "40px", paddingBottom: "40px" }}
          />
          <div className="row props" style={{ paddingBottom: "60px" }}>
            <div
              className="col-lg-3"
              style={{
                paddingBottom: "40px",
                paddingTop: "40px",
                backgroundColor: "#e9ecef",
                textAlign: "center",
                alignItems: "center"
              }}
            >
              <img
                className="rounded-circle"
                src="https://source.unsplash.com/random/900x900?woman"
                alt=""
                width="140"
                height="140"
              />
              <br />
              <br />
              <h2>The CEO</h2>
              <br />
            </div>
            <br />
            <br />
            <div
              className="col-lg-3 offset-1"
              style={{
                paddingBottom: "40px",
                paddingTop: "40px",
                backgroundColor: "#e9ecef",
                textAlign: "center",
                alignItems: "center"
              }}
            >
              <img
                className="rounded-circle"
                src="https://source.unsplash.com/random/800x800?man"
                alt=""
                width="140"
                height="140"
              />
              <br />
              <br />
              <h2>The CTO</h2>
              <br />
            </div>
            <br />
            <br />
            <div
              className="col-lg-3 offset-1"
              style={{
                paddingBottom: "40px",
                paddingTop: "40px",
                backgroundColor: "#e9ecef",
                textAlign: "center",
                alignItems: "center"
              }}
            >
              <img
                className="rounded-circle"
                src="https://source.unsplash.com/random/800x800?woman"
                alt=""
                width="140"
                height="140"
              />
              <br />
              <br />
              <h2>The CFO</h2>
              <br />
            </div>
          </div>
          <hr
            className="featurette-divider"
            style={{ paddingTop: "40px", paddingBottom: "40px" }}
          />

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://source.unsplash.com/random/1600x800?technology"
                alt="First slide"
              />
              <Carousel.Caption>
                <h2>GucciPlate</h2>
                <p>We don't play with avocados, we eat them</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://source.unsplash.com/random/1600x800?tech"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h2>GucciPlate</h2>
                <p> And they are delicious</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://source.unsplash.com/random/1600x800?computer"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h2>GucciPlate</h2>
                <p>That's now a spanish avocado :)</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div
            className="container"
            style={{ paddingTop: "40px", paddingBottom: "40px" }}
          ></div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeComp;
