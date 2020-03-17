import React, { Component } from 'react';
import actions from '../../services/index'
import logo from "../../images/engagementML.png";
import IGback from '../../images/igback.jpg'
// frontend\src\images\instagram-background.jpg
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
            <div style={{backgroundImage:`url(${IGback})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", height:"100vh"}}>
            <div className="container h-100" >
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
                  <div className="d-flex justify-content-center form_container" id="signUpCopy">
                    <form onSubmit={this.handleSubmit}>
                      <div className="input-group mb-3" >
                        <div className="input-group-append" >
                          <span className="input-group-text">
                            <FaUser />
                          </span>
                        </div>
                        <input
                          placeholder="Email here "
                          style={{border: "0",outline: "0", background: "transparent", borderBottom: '0.15rem solid #e5e6e7', borderRadius:"0"}}
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
                          style={{border: "0",outline: "0", background: "transparent", borderBottom: '0.15rem solid #e5e6e7', borderRadius:"0"}}
                          name="password"
                          type="password"
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="d-flex justify-content-center mt-5 login_container">
                        <Button type="submit" value="Sign Up" style={{borderColor:'#e5e6e7',color:"#e5e6e7"}}>
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