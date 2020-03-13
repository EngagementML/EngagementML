import React, {Component, Fragment} from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/404/NotFound.js';
import SignUp from './components/auth/SignUp';
import LogIn from './components/auth/LogIn';
import Profile from './components/profile/Profile'
import actions from './services/index'
import { Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Footer from './components/home/HomeComponents/Footer';
import logo from './images/engagementML.png'
import AdminLayout from "./components/profile/layouts/Admin.jsx";
// import Dashboard from "./components/profile/views/Dashboard.jsx";
// import UserProfile from "./components/profile/views/UserProfile.jsx";
// import TableList from "./components/profile/views/TableList.jsx";
// import Typography from "./components/profile/views/Typography.jsx";
// import Icons from "./components/profile/views/Icons.jsx";



class App extends Component {
  
  state = { }
  
  async componentDidMount() {
    let user = await actions.isLoggedIn()
    this.setState({...user.data})
    console.log('coolest ',user)

  }

  setUser = (user) => this.setState(user)
  
  logOut = async () => {
    let res = await actions.logOut()
    this.setUser({email:null, createdAt: null, updatedAt: null, _id: null }) //FIX 
  }

  render(){

    return (
      <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/#">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />{" "}
            EngagementML
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title="More" id="basic-nav-dropdown">
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
            render={props => <AdminLayout {...props} user={this.state} />}
          />

          {/* <Route
            exact
            path="/profile/admin/user"
            render={props => <AdminLayout {...props} user={this.state} />}
          /> */}

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
