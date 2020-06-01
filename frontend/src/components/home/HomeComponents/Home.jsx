import React, { Component } from "react";
import logo from '../../../images/engagementML.png'
import { Link } from 'react-router-dom'
import axios from "axios"

  
class HomeComp extends Component {
  handleSubmit(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    axios({
      method: "POST",
      url: "https://engagementml.herokuapp.com/send",
      data: {
        name: name,
        email: email,
        message: message
      }
    }).then(response => {
      if (response.data.msg === "success") {
        alert("Thank you for reaching out to us! Message Sent.");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Error upon sending form! Message failed to send. Please try again!");
      }
    });
  }

  resetForm() {
    document.getElementById("contact-form").reset();
  }

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
                applications developed for social media research and strategy
                optimizations
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
                This application lets its users analyze the data from the last
                twelve Instagram posts, running our sophisticated
                machine-learning algorithm to recommend optimizations, which
                will increase your engagement rate.
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
                strategies based on your top competitors or influencers in your
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
                    href="https://i.redd.it/moigifebc3341.jpg"
                    className="image fit"
                  >
                    <img
                      src="https://i.redd.it/moigifebc3341.jpg"
                      title="Drake"
                      alt="Drake"
                    />
                  </a>
                </article>
                <article className="from-right">
                  <a
                    href="https://pbs.twimg.com/profile_images/1184438834555060224/Pmu-m_Xu_400x400.jpg"
                    className="image fit"
                  >
                    <img
                      src="https://pbs.twimg.com/profile_images/1184438834555060224/Pmu-m_Xu_400x400.jpg"
                      title="Jennifer Aniston"
                      alt="Jennifer Aniston"
                    />
                  </a>
                </article>
                <article className="from-left">
                  <a
                    href="https://pbs.twimg.com/profile_images/1235946276178583552/yx5AzxxP_400x400.jpg"
                    className="image fit"
                  >
                    <img
                      src="https://pbs.twimg.com/profile_images/1235946276178583552/yx5AzxxP_400x400.jpg"
                      title="Shakira"
                      alt="Shakira"
                    />
                  </a>
                </article>
                <article className="from-right">
                  <a
                    href="https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/s320x320/71718204_448894825985782_2989796854381674496_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_ohc=gjqddZkSNO4AX9_CNtX&oh=a150a6410e0c284cc1f769a2c64df0cc&oe=5EFD7FD7"
                    className="image fit"
                  >
                    <img
                      src="https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/s320x320/71718204_448894825985782_2989796854381674496_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_ohc=gjqddZkSNO4AX9_CNtX&oh=a150a6410e0c284cc1f769a2c64df0cc&oe=5EFD7FD7"
                      title="Billie Eilish"
                      alt="Billie Eilish"
                    />
                  </a>
                </article>
                <article className="from-left">
                  <a
                    href="https://pbs.twimg.com/profile_images/1195009386189639682/JLZgJ-S3_400x400.jpg"
                    className="image fit"
                  >
                    <img
                      src="https://pbs.twimg.com/profile_images/1195009386189639682/JLZgJ-S3_400x400.jpg"
                      title="Priyanka Chopra"
                      alt="Priyanka Chopra"
                    />
                  </a>
                </article>
                <article className="from-right">
                  <a
                    href="https://iprofile.kolsquare.com/profile/user_188222091.jpg"
                    className="image fit"
                  >
                    <img
                      src="https://iprofile.kolsquare.com/profile/user_188222091.jpg"
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
                <form
                  action="/send"
                  id="contact-form"
                  onSubmit={(e) => this.handleSubmit(e)}
                  method="POST"
                  // role="form"
                >
                  <div className="fields">
                    <div className="field half">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="field half">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="field">
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Enter your message here"
                        rows="3"
                        required
                      />
                    </div>
                  </div>
                  <ul className="actions special">
                    <li>
                      <input
                        type="submit"
                        className="btn btn-outline btn-success"
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
