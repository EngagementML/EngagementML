import React, { Component } from "react";
// import { Link } from "react-router-dom";
import logo from "../../../images/engagementML.png";


class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer
          className="page-footer font-small blue pt-4"
          style={{
            backgroundColor: "black",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1534796636912-3b95b3ab5986)",
            backgroundSize: "contain",
            paddingTop: "40px",
            paddingBottom: "20px",
            color: "white",
            textDecoration: "none"
          }}
        >
          <div
            className="container-fluid text-center text-md-left container"
            style={{ paddingTop: "40px" }}
          >
            <div className="row" style={{ display: "align-space-evenly" }}>
              <div className="col-md-6 mt-md-0 mt-3">
                <h5>
                  About the{" "}
                  <img src={logo} width="200" height="40" alt="EngagementML" />{" "}
                  Application Project
                </h5>
                <p>
                  EngagementML is machine learning application developed for
                  social media management research and strategy optimization.
                  If you want to know more about the project be sure to conect
                  with us!
                  <br/>
                  <br />
                  Contact us:{" "}
                  <a href="mailto:engagementml@gmail.com">
                    engagementML@gmail.com
                  </a>
                  
                </p>
              </div>

              <hr
                className="clearfix w-100 d-md-none pb-3"
                style={{ paddingLeft: "10px" }}
              />

              <div
                className="col-md-3 mb-md-0 mb-3"
                style={{ textAlign: "center" }}
              >
                <h5 className="text-uppercase">Proudly Originated at</h5>
                <br />
                <a
                  href="https://www.ironhack.com/en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/4017/s300/logo-ironhack-blue.png"
                    alt="Ironhack"
                    width="120vw"
                    height="120vh"
                  />
                </a>
                <br />
                <br />
              </div>

              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase" style={{ textAlign: "center" }}>
                  Useful Links
                </h5>

                <ul className="list-unstyled" style={{ textAlign: "center" }}>
                  <li>
                    <a
                      href="https://github.com/EngagementML"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Artificial Intelligence
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Machine Learning
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <br />
          <br />
        </footer>
        <div className="footer-copyright text-center py-3">
          <img src={logo} width="200" height="40" alt="EngagementML" /> | All
          rights reserved © {new Date().getFullYear()}
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
