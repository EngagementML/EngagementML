import React, { Component, Fragment } from 'react';
import actions from '../../services/index'
import logo from '../../images/engagementML.png'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
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
        this.props.history.push('/profile')
      })
      .catch(({ response }) => console.error(response.data));
  };

  

  render() {
    return (
      <Fragment>
        <div className="container h-100">
          <div className="d-flex justify-content-center h-100">
            <div className="user_card">
              <div className="d-flex justify-content-center">
                <div className="brand_logo_container">
                  <img src={logo} className="brand_logo" alt="Logo" />
                </div>
              </div>
              <div className="d-flex justify-content-center form_container">
                <form onSubmit={this.handleSubmit}>
                  <div className="input-group mb-3">
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <FaUser />
                      </span>
                    </div>
                    <input
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
                      name="password"
                      type="password"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
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
                  </div>
                  <div className="d-flex justify-content-center mt-3 login_container">
                    
                      <Button
                      type="submit"
                      value="Log In"
                    >{" "}
                      Log In{" "}
                    </Button>
                  </div>
                </form>
              </div>
              <div className="mt-4">
                <div className="d-flex justify-content-center links">
                  Don't have an account?{" "}
                  <a href="#" className="ml-2">
                    Sign Up
                  </a>
                </div>
                <div className="d-flex justify-content-center links">
                  <a href="#">Forgot your password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <h2>LogIn</h2>
            <form onSubmit={this.handleSubmit}>
              <input name="email" type="email" onChange={this.handleChange} />
              <input
                name="password"
                type="password"
                onChange={this.handleChange}
              />
              <input type="submit" value="Log In" />
            </form> */}
      </Fragment>
    );
  }
}

export default LogIn;