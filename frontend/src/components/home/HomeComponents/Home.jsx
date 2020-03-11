import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

class HomeComp extends Component {
  render() {
    return (
      <React.Fragment>
        <div>

          {/* Intro */}
          <section id="intro" className="main style1 dark fullscreen">
            <div className="content">
              <header>
                <h2>Hey.</h2>
              </header>
              <p>
                Welcome to <strong>Big Picture</strong> a responsive site
                template designed by <a href="https://html5up.net">HTML5 UP</a>
                <br />
                and released for free under the{" "}
                <a href="https://html5up.net/license">
                  Creative Commons Attribution license
                </a>
                .
              </p>
              <footer>
                <a href="#one" className="button style2 down">
                  More
                </a>
              </footer>
            </div>
          </section>
          {/* One */}
          <section id="one" className="main style2 right dark fullscreen">
            <div className="content box style2">
              <header>
                <h2>What I Do</h2>
              </header>
              <p>
                Lorem ipsum dolor sit amet et sapien sed elementum egestas
                dolore condimentum. Fusce blandit ultrices sapien, in accumsan
                orci rhoncus eu. Sed sodales venenatis arcu, id varius justo
                euismod in. Curabitur egestas consectetur magna.
              </p>
            </div>
            <a href="#two" className="button style2 down anchored">
              Next
            </a>
          </section>
          {/* Two */}
          <section id="two" className="main style2 left dark fullscreen">
            <div className="content box style2">
              <header>
                <h2>Who I Am</h2>
              </header>
              <p>
                Lorem ipsum dolor sit amet et sapien sed elementum egestas
                dolore condimentum. Fusce blandit ultrices sapien, in accumsan
                orci rhoncus eu. Sed sodales venenatis arcu, id varius justo
                euismod in. Curabitur egestas consectetur magna.
              </p>
            </div>
            <a href="#work" className="button style2 down anchored">
              Next
            </a>
          </section>
          {/* Work */}
          <section id="work" className="main style3 primary">
            <div className="content">
              <header>
                <h2>My Work</h2>
                <p>
                  Lorem ipsum dolor sit amet et sapien sed elementum egestas
                  dolore condimentum. Fusce blandit ultrices sapien, in accumsan
                  orci rhoncus eu. Sed sodales venenatis arcu, id varius justo
                  euismod in. Curabitur egestas consectetur magna vitae.
                </p>
              </header>
              {/* Gallery  */}
              <div className="gallery">
                <article className="from-left">
                  <a href="images/fulls/01.jpg" className="image fit">
                    <img
                      src="images/thumbs/01.jpg"
                      title="The Anonymous Red"
                      alt=""
                    />
                  </a>
                </article>
                <article className="from-right">
                  <a href="images/fulls/02.jpg" className="image fit">
                    <img
                      src="images/thumbs/02.jpg"
                      title="Airchitecture II"
                      alt=""
                    />
                  </a>
                </article>
                <article className="from-left">
                  <a href="images/fulls/03.jpg" className="image fit">
                    <img src="images/thumbs/03.jpg" title="Air Lounge" alt="" />
                  </a>
                </article>
                <article className="from-right">
                  <a href="images/fulls/04.jpg" className="image fit">
                    <img src="images/thumbs/04.jpg" title="Carry on" alt="" />
                  </a>
                </article>
                <article className="from-left">
                  <a href="images/fulls/05.jpg" className="image fit">
                    <img
                      src="images/thumbs/05.jpg"
                      title="The sparkling shell"
                      alt=""
                    />
                  </a>
                </article>
                <article className="from-right">
                  <a href="images/fulls/06.jpg" className="image fit">
                    <img src="images/thumbs/06.jpg" title="Bent IX" alt="" />
                  </a>
                </article>
              </div>
            </div>
          </section>
          {/* Contact */}
          <section id="contact" className="main style3 secondary">
            <div className="content">
              <header>
                <h2>Say Hello.</h2>
                <p>
                  Lorem ipsum dolor sit amet et sapien sed elementum egestas
                  dolore condimentum.
                </p>
              </header>
              <div className="box">
                <form method="post" action="#">
                  <div className="fields">
                    <div className="field half">
                      <input type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="field half">
                      <input type="email" name="email" placeholder="Email" />
                    </div>
                    <div className="field">
                      <textarea
                        name="message"
                        placeholder="Message"
                        rows={6}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <ul className="actions special">
                    <li>
                      <input type="submit" defaultValue="Send Message" />
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </section>
        </div>

        {/* <Carousel>
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
        </div> */}
      </React.Fragment>
    );
  }
}

export default HomeComp;
