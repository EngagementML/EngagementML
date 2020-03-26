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
import Dashboard from "../profile/views/Dashboard.jsx"
import UserProfile from "../profile/views/UserProfile.jsx";
import TableList from "../profile/views/TableList.jsx";
import Research from "../profile/views/Research.jsx";
import Icons from "../profile/views/Icons.jsx";
// import Maps from "../profile/views/Maps.jsx";
// import Notifications from "../profile/views/Notifications.jsx";
// import Upgrade from "../profile/views/Upgrade.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/profile/admin"
  },
  {
    path: "/user",
    name: "Edit Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/profile/admin"
  },
  {
    path: "/research",
    name: "Research",
    icon: "pe-7s-search",
    component: Research,
    layout: "/profile/admin"
  },
  {
    path: "/table",
    name: "Hashtags",
    icon: "pe-7s-star",
    component: TableList,
    layout: "/profile/admin"
  },
  {
    path: "/icons",
    name: "Compare",
    icon: "pe-7s-repeat",
    component: Icons,
    layout: "/profile/admin"
  }
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "pe-7s-map-marker",
  //   component: Maps,
  //   layout: "/profile/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "pe-7s-bell",
  //   component: Notifications,
  //   layout: "/profile/admin"
  // },
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "pe-7s-rocket",
  //   component: Upgrade,
  //   layout: "/profile/admin"
  // } 
];

export default dashboardRoutes;
