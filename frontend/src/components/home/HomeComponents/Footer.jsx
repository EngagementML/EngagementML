import React, { Component } from "react";
// import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer
          className="page-footer font-small blue pt-4"
          style={{
            backgroundColor: "#3A6EA5",
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
                <h5>About the EngamentML Application Project</h5>
                <p>
                  This is an open source application intended as boilerplate
                  for programmers that want a simple Bootstrap template to engage in fast prototyping for React Applications. <br />
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
                      href="https://riverapecunia.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Link #1
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://pecuniagroup.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link #2
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link #3
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.npmjs.com/package/axios"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link #4
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
          EngagementML
          {" "}
          | All rights reserved © {new Date().getFullYear()}
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
