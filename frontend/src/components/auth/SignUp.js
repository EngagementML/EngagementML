import React, { Component, Fragment } from 'react';
import actions from '../../services/index'
import logo from "../../images/engagementMLb.png";
import { Button } from "react-bootstrap";
import { FaKey, FaUser } from "react-icons/fa";

class SignUp extends Component {
    state = {

    } 
    handleChange = e => this.setState({[e.target.name]: e.target.value})

    handleSubmit =  e => {
        e.preventDefault()
            actions.signUp(this.state).then(user=> {
                this.props.setUser({...user.data})  
            }).catch(({ response }) => console.error(response.data));
    }
    render() {
        return (
          <Fragment>
            <div className="container h-100">
              <div className="d-flex justify-content-center h-100">
                <div className="user_card">
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
                      <div className="d-flex justify-content-center mt-3 login_container">
                        <Button type="submit" value="Sign Up">
                          {" "}
                          Sign Up{" "}
                        </Button>
                      </div>
                    </form>
                  </div>
                  
                </div>
              </div>
            </div>
          </Fragment>
        );
    }
}

export default SignUp;