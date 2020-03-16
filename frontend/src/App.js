import React, {Component, Fragment} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/404/NotFound.js';
import SignUp from './components/auth/SignUp';
import LogIn from './components/auth/LogIn';
import Profile from './components/profile/Profile'
import actions from './services/index'
import { Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from './images/engagementMLb.png'
import AdminLayout from "./components/profile/layouts/Admin.jsx";
import UserProfile from "../src/components/profile/views/UserProfile"
import MetaTags from "react-meta-tags";
import axios from "axios";





class App extends Component {
  
  state = { }
  
  async componentDidMount() {
    let user = await actions.isLoggedIn()
    this.setState({...user.data})
    console.log('Current User >> ',user)

    axios
      // .get("http://localhost:5000/profiles/")
      .get("https://engagementml.herokuapp.com/profiles/")
      .then(res => {
        // console.log(res, res.data);
        this.setState({
          profiles: res.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  

  }

  setUser = (user) => this.setState(user)
  
  logOut = async () => {
    let res = await actions.logOut()
    this.setUser({
      email: null,
      createdAt: null,
      updatedAt: null,
      _id: null
    }) //FIX  - we need to figure a way to upon logout -> push to home page **
  }

  render(){

    return (
      <BrowserRouter>
        <MetaTags>
          <title>
            EngagementML - Optimizing your Social Media Strategy with Machine
            Learning
          </title>
          <meta
            property="og:url"
            content="https://engagementml.herokuapp.com"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="EngagementML - Optimizing your Social Media Strategy with Machine Learning"
          />
          <meta
            property="og:description"
            content="Optimizing your Social Media Strategy with Machine Learning"
          />
          <meta property="og:image" content="../src/images/header.jpeg" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:site"
            content="https://engagementml.herokuapp.com"
          />
          <meta name="twitter:creator" content="Gustavo Rivera Pecunia" />
          <meta
            name="twitter:title"
            content="EngagementML - Optimizing your Social Media Strategy with Machine Learning"
          />
          <meta
            name="twitter:description"
            content="Optimizing your Social Media Strategy with Machine Learning"
          />
          <meta name="twitter:image" content="../src/images/header.jpeg" />
        </MetaTags>
        <Navbar collapseOnSelect bg="light" expand="lg">
          <Navbar.Brand href="/#">
            <img
              src={logo}
              width="200"
              height="40"
              className="d-inline-block align-top"
              alt="EngagementML"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            // onToggle
            className="navbar-toggler"
            aria-controls="#basic-navbar-nav"
            data-toggle="collapse"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown
                title="More"
                id="basic-nav-dropdown"
                className="navbar-dropdown-toggler"
                // aria-controls="#basic-navbar-dropdown"
                data-toggle="dropdown"
              >
                <NavDropdown.Item href="https://github.com/EngagementML">
                  Github
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Contact">
                  Contact
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://riverapecunia.com">
                  Developer
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {this.state.email ? (
              <Fragment>
                <Form inline>
                  <Button
                    as={Link}
                    to="/profile/admin/dashboard"
                    variant="info mr-1"
                  >
                    {this.state.email}
                  </Button>
                  <Button
                    // as={Link}
                    onClick={this.logOut}
                    variant="outline-warning mr-1"
                    className="btn"
                  >
                    Log Out
                  </Button>
                </Form>
              </Fragment>
            ) : (
              <Fragment>
                <Form inline>
                  <Button
                    as={Link}
                    to="/log-in"
                    variant="outline-success  mr-1"
                  >
                    Log In
                  </Button>
                  <Button as={Link} to="/sign-up" variant="outline-primary">
                    Sign Up
                  </Button>
                </Form>
              </Fragment>
            )}
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route
            exact
            path="/sign-up"
            render={props => <SignUp {...props} setUser={this.setUser} />}
          />
          <Route
            exact
            path="/log-in"
            render={props => <LogIn {...props} setUser={this.setUser} />}
          />
          <Route
            exact
            path="/profile"
            render={props => <Profile {...props} user={this.state} />}
          />
          <Route
            path="/profile/admin/"
            render={props => <AdminLayout {...props} profiles={this.state.profiles} user={this.state} />}
          />

          <Route
            exact
            path="/profile/admin/user"
            render={props => (
              <UserProfile
                {...props}
                user={this.state}
                setUser={this.setUser}
              />
            )}
          />

          <Route component={NotFound} />

          {/* http://localhost:3000/profile/admin/dashboard */}

          {/* <Redirect from="/profile" to="/profile/admin/dashboard" /> */}
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    );
  }
}
export default App;
