import React, { Component } from "react";
import logo from '../../../images/engagementML.png'
import { Link } from 'react-router-dom'
import axios from "axios"

  
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
                applications developed for social media management research and
                strategy
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
                <h2>
                  <strong>What EngagementML does?</strong>
                </h2>
              </header>
              <p>
                This application lets its user analyze the data from the last 12
                IG posts and runs our complex machine learning algorythm using
                regression analysis to reccomend optimizations which will
                increase your engagement rate.
              </p>
              <br />
              <br />
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
                <h2>
                  <strong>How can EngagementML help you?</strong>
                </h2>
              </header>
              <p>
                We can help you by the power of predicting and reccomending
                strategies based on your top competitors or infuencers in your
                industry. Excel in your content and engagement strategy!
              </p>
              <br />
              <br />
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
                <h2 style={{ color: "white" }}>
                  <strong>SoMe Case Studies</strong>
                </h2>
                <p style={{ color: "white" }}>
                  Track and follow your competitors and infuencers with
                  EngagementML
                </p>
              </header>
              {/* Gallery  */}
              <div className="gallery">
                <article className="from-left">
                  <a
                    href="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s320x320/78964845_582853779208367_1558803722329391104_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=MaFcSJEOyz8AX-Ck7bI&oh=0206e796d9fcca04c441ffba6be22aa3&oe=5EA47B7C"
                    className="image fit"
                  >
                    <img
                      src="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s320x320/78964845_582853779208367_1558803722329391104_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=MaFcSJEOyz8AX-Ck7bI&oh=0206e796d9fcca04c441ffba6be22aa3&oe=5EA47B7C"
                      title="Drake"
                      alt="Drake"
                    />
                  </a>
                </article>
                <article className="from-right">
                  <a
                    href="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s320x320/71594249_1125833014288751_8012044229767331840_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=5Y-RG_D12YMAX92Inoy&oh=7568e195b25d372e12db1c7542063d03&oe=5EA20F3A"
                    className="image fit"
                  >
                    <img
                      src="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s320x320/71594249_1125833014288751_8012044229767331840_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=5Y-RG_D12YMAX92Inoy&oh=7568e195b25d372e12db1c7542063d03&oe=5EA20F3A"
                      title="Jennifer Aniston"
                      alt="Jennifer Aniston"
                    />
                  </a>
                </article>
                <article className="from-left">
                  <a
                    href="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s320x320/87485911_2595250347427294_7578127957344911360_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=dX6me_iuGlAAX-EOeE3&oh=f849a55d014fe72a797b47e64d244192&oe=5EA3CDEF"
                    className="image fit"
                  >
                    <img
                      src="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s320x320/87485911_2595250347427294_7578127957344911360_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=dX6me_iuGlAAX-EOeE3&oh=f849a55d014fe72a797b47e64d244192&oe=5EA3CDEF"
                      title="Shakira"
                      alt="Shakira"
                    />
                  </a>
                </article>
                <article className="from-right">
                  <a
                    href="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s320x320/71718204_448894825985782_2989796854381674496_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=6hPWKuGMvGwAX-HkJOy&oh=55da1033e98cce0bb1a3a8912a7a2865&oe=5E9F2CA9"
                    className="image fit"
                  >
                    <img
                      src="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s320x320/71718204_448894825985782_2989796854381674496_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=6hPWKuGMvGwAX-HkJOy&oh=55da1033e98cce0bb1a3a8912a7a2865&oe=5E9F2CA9"
                      title="Billie Eilish"
                      alt="Billie Eilish"
                    />
                  </a>
                </article>
                <article className="from-left">
                  <a
                    href="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s320x320/72873456_425339975028135_3038321055589466112_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=MKkZivG9pn8AX-XN7_P&oh=a0e437709b7e20de627957a616131007&oe=5E9C9FA3"
                    className="image fit"
                  >
                    <img
                      src="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s320x320/72873456_425339975028135_3038321055589466112_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=MKkZivG9pn8AX-XN7_P&oh=a0e437709b7e20de627957a616131007&oe=5E9C9FA3"
                      title="Priyanka Chopra"
                      alt="Priyanka Chopra"
                    />
                  </a>
                </article>
                <article className="from-right">
                  <a
                    href="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s320x320/60069326_2844010522491121_8257963186574065664_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=tzw6nxWj6JIAX_uKbbu&oh=df8754150a8b8a54b71d1984dee08085&oe=5EA45B85"
                    className="image fit"
                  >
                    <img
                      src="https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s320x320/60069326_2844010522491121_8257963186574065664_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=tzw6nxWj6JIAX_uKbbu&oh=df8754150a8b8a54b71d1984dee08085&oe=5EA45B85"
                      title="James Rodriguez"
                      alt="James Rodriguez"
                    />
                  </a>
                </article>
              </div>
            </div>
          </section>
          {/* Contact */}
          <section id="contact" className="main style3 secondary">
            <div className="content">
              <header>
                <h2>
                  <strong>Questions / Comments</strong>
                </h2>
                <p>
                  Interested in learning more about EngagementML or have a
                  questions for us? Drop us a line!
                </p>
              </header>
              <div className="box">
                <form method="post" action="/#">
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
                      <input
                        type="submit"
                        className="btn btn-outline btn-success"
                        defaultValue="Send Message"
                      />
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
