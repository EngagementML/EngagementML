/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { NavItem, Nav, NavDropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";

class AdminNavbarLinks extends Component {
  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
        <Nav>
          <NavItem eventkey={1} href="#">
            <i className="fa fa-dashboard" />
            <p className="hidden-lg hidden-md">Dashboard</p>
          </NavItem>
          <NavDropdown
            eventkey={2}
            title={notification}
            noCaret
            id="basic-nav-dropdown"
          >
            <DropdownItem eventkey={2.1}>Notification 1</DropdownItem>
            <DropdownItem eventkey={2.2}>Notification 2</DropdownItem>
            <DropdownItem eventkey={2.3}>Notification 3</DropdownItem>
            <DropdownItem eventkey={2.4}>Notification 4</DropdownItem>
            <DropdownItem eventkey={2.5}>Another notifications</DropdownItem>
          </NavDropdown>
          <NavItem eventkey={3} href="#">
            <i className="fa fa-search" />
            <p className="hidden-lg hidden-md">Search</p>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventkey={1} href="#">
            Account
          </NavItem>
          <NavDropdown
            eventkey={2}
            title="Dropdown"
            id="basic-nav-dropdown-right"
          >
            <DropdownItem eventkey={2.1}>Action</DropdownItem>
            <DropdownItem eventkey={2.2}>Another action</DropdownItem>
            <DropdownItem eventkey={2.3}>Something</DropdownItem>
            <DropdownItem eventkey={2.4}>Another action</DropdownItem>
            <DropdownItem eventkey={2.5}>Something</DropdownItem>
            <DropdownItem divider />
            <DropdownItem eventkey={2.5}>Separated link</DropdownItem>
          </NavDropdown>
          <NavItem eventkey={3} href="#">
            Log out
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
