import React, { Component } from "react";
import logo from '../../../images/engagementML.png'
import { Link } from 'react-router-dom'

  
class HomeComp extends Component {

  render() {
    return (
      <React.Fragment>
        <div>
          {/* Intro */}
          <section id="intro" className="main style1 dark fullscreen">
            <div className="content">
              <header>
                <img
                  width="100%"
                  style={{ alignContent: "center" }}
                  src={logo}
                  alt="Logo"
                />
              </header>
              <p>
                Welcome to <strong>EngagementML</strong> a machine learning
                applications developed for social media management strategy
                and released under the MIT license.
              </p>
              <footer>
                <a
                  as={Link}
                  href="/#one"
                  className="button style2 down"
                  spy="true"
                  smooth="true"
                  offset={-70}
                  duration={500}
                >
                  More
                </a>
              </footer>
            </div>
          </section>
          {/* One */}
          <section id="one" className="main style2 right dark fullscreen">
            <div className="content box style2">
              <header>
                <h2>What EngagementML does?</h2>
              </header>
              <p>
                This application lets its user analyze the data from the last 12
                IG posts and runs our complex machine learning algorythm using
                regression analysis to predict the future engagement rate.
              </p>
            </div>
            <a
              as={Link}
              spy="true"
              smooth="true"
              offset={-70}
              duration={500}
              href="/#two"
              className="button style2 down anchored"
            >
              Next
            </a>
          </section>
          {/* Two */}
          <section id="two" className="main style2 left dark fullscreen">
            <div className="content box style2">
              <header>
                <h2>How can EngagementML help you?</h2>
              </header>
              <p>
                We can help you by the power of predicting and reccomending strategies based on your top competitors or infuencers in your industry. Excel in your content and engagement strategy!
              </p>
            </div>
            <a
              as={Link}
              spy="true"
              smooth="true"
              offset={-70}
              duration={500}
              href="/#work"
              className="button style2 down anchored"
            >
              Next
            </a>
          </section>
          {/* Work */}
          <section id="work" className="main style3 primary">
            <div className="content">
              <header>
                <h2>Our Case Studies</h2>
                <p>
                  Read some of our case social media studies with EngagementML
                </p>
              </header>
              {/* Gallery  */}
              <div className="gallery">
                <article className="from-left">
                  <a href="/" className="image fit">
                    <img
                      src="images/image12.jpg"
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
                  <a href="/src/images/image 12.jpg" className="image fit">
                    <img src="/images/image 12.jpg" title="Bent IX" alt="" />
                  </a>
                </article>
              </div>
            </div>
          </section>
          {/* Contact */}
          <section id="contact" className="main style3 secondary">
            <div className="content">
              <header>
                <h2>Questions / Comments</h2>
                <p>
                  Interested in learning more about EngagementML or have a questions for us? Drop us a line!
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
      </React.Fragment>
    );
  }
}

export default HomeComp;
