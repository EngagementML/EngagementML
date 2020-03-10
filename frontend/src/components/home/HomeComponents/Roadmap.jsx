import React, { Component } from 'react';
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Carousel } from 'react-bootstrap'

class Roadmap extends Component {
    render() {
        return (
          <React.Fragment>
            <Navigation />
            <div className="container home page">
              <h1>Roadmap for the Application</h1>
              <br />
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://source.unsplash.com/random/1600x800?journey"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h2>Roadmap - GucciPlate</h2>
                    <p>We don't play with roads, we map them</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://source.unsplash.com/random/1600x800?path"
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
                    src="https://source.unsplash.com/random/1600x800?road"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h2>GucciPlate</h2>
                    <p>That's now a spanish carretera :)</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              <br />
            </div>
            <br />
            <br />
            <Footer />
          </React.Fragment>
        );
    }
}

export default Roadmap;