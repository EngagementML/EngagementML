import React, { Component } from 'react';
import actions from '../../services/index'
import logo from "../../images/engagementMLsm.png";
import { Button } from 'react-bootstrap'
import IGbackBlue from '../../images/backgroundBlue.png'
// import { Link } from 'react-router-dom';
import { FaKey, FaUser } from "react-icons/fa";

class LogIn extends Component {
  state = {};
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    actions
      .logIn(this.state)
      .then(user => {
        this.props.setUser({ ...user.data })
        // console.log(this.props)
        this.props.history.push('/profile/admin/dashboard')
      })
      .catch(({ response }) => console.error(response.data));
  };

  

  render() {

    return (
      <div
        style={{
          backgroundImage: `url(${IGbackBlue})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh"
        }}
      >
        <div className="container h-100">
          <div className="d-flex justify-content-center h-100">
            <div className="d-flex flex-column justify-content-center">
              <div className="d-flex justify-content-center">
                <div className="brand_logo_container">
                  <img
                    src={logo}
                    width="100%"
                    className="brand_logo"
                    alt="Logo"
                  />
                </div>
              </div>
              <div
                className="d-flex justify-content-center form_container"
                id="signUpCopy"
              >
                <form onSubmit={this.handleSubmit}>
                  <div className="input-group mb-3">
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <FaUser />
                      </span>
                    </div>
                    <input
                      placeholder="Email here "
                      style={{
                        border: "0",
                        outline: "0",
                        background: "transparent",
                        borderBottom: "0.15rem solid #e5e6e7",
                        borderRadius: "0"
                      }}
                      name="email"
                      type="email"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="input-group mb-2">
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <FaKey />
                      </span>
                    </div>
                    <input
                      placeholder="Password here "
                      style={{
                        border: "0",
                        outline: "0",
                        background: "transparent",
                        borderBottom: "0.15rem solid #e5e6e7",
                        borderRadius: "0"
                      }}
                      name="password"
                      type="password"
                      onChange={this.handleChange}
                    />
                  </div>
                  {/* This below is the remember me checkbox */}
                  {/* <div className="form-group mt-4">
                    <div className="custom-control custom-checkbox" style={{border: "0",outline: "0", background: "transparent", borderBottom: '0.15rem solid #e5e6e7', borderRadius:"0",fontFamily: `Courier New, Courier, monospace`,color: 'whitesmoke', opacity: '0.5' }}>
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customControlInline"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customControlInline"
                      >
                        Remember me
                      </label>
                    </div>
                  </div> */}
                  <div className="d-flex justify-content-center mt-5 login_container">
                    <Button
                      type="submit"
                      value="Log In"
                      style={{ borderColor: "#e5e6e7", color: "#e5e6e7" }}
                    >
                      Log In
                    </Button>
                  </div>
                </form>
              </div>
              <div className="mt-4">
                <div
                  className="d-flex justify-content-center links"
                  style={{ color: "whitesmoke", opacity: "0.5" }}
                >
                  Don't have an account?{" "}
                  <a
                    href="/sign-up"
                    className="ml-2"
                    style={{ textDecoration: "underline" }}
                  >
                    Sign Up
                  </a>
                </div>
                <div className="d-flex justify-content-center links">
                  <a href="mailto:engagementml@gmail.com?subject=Forgot%20my%20eML%20Password">
                    Forgot your password?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;