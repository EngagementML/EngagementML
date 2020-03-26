import React, { Component } from 'react';
import actions from '../../services/index'
import logo from "../../images/engagementML.png";
import IGback from '../../images/igback.jpg'
// frontend\src\images\instagram-background.jpg
import { Button } from "react-bootstrap";
import { FaKey, FaUser } from "react-icons/fa";
// import waitForSingleData from "../../../../backend/routes/singleInstaRoute/SingleRoute"
// import { Link } from "react-router-dom";

class SignUp extends Component {
    state = {

    } 
    handleChange = e => this.setState({[e.target.name]: e.target.value})

    handleSubmit =  async e => {
        e.preventDefault( )
            actions.signUp(this.state).then( async user => {
                this.props.setUser({...user.data})
                this.props.history.push("/profile/admin/user")
                // console.log(this.props)
                 
            }).catch(({ response }) => alert("This username has already been taken. Please try again with a different username!"))
    }

    render() {
       
        return (
          <div
            style={{
              backgroundImage: `url(${IGback})`,
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
                        {/* <input
                          placeholder="IG Username"
                          style={{
                            border: "0",
                            outline: "0",
                            background: "transparent",
                            borderBottom: "0.15rem solid #e5e6e7",
                            borderRadius: "0"
                          }}
                          name="igUsername"
                          type="text"
                          onChange={this.handleChange}
                        /> */}
                      </div>
                      <div className="input-group mb-3">
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
                      <div className="input-group mb-3">
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <FaUser />
                          </span>
                        </div>
                        
                        <input
                          placeholder="IG Username"
                          style={{
                            border: "0",
                            outline: "0",
                            background: "transparent",
                            borderBottom: "0.15rem solid #e5e6e7",
                            borderRadius: "0"
                          }}
                          name="igUsername"
                          type="text"
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="d-flex justify-content-center mt-5 login_container">
                        {/* <Button as={Link} to="/profile/admin/dashboard" type="submit" value="Sign Up" style={{borderColor:'#e5e6e7',color:"#e5e6e7"}}> */}
                        <Button
                          type="submit"
                          value="Sign Up"
                          style={{ borderColor: "#e5e6e7", color: "#e5e6e7" }}
                        >
                          Sign Up
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default SignUp;