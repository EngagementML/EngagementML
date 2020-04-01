
import Dashboard from "../profile/views/Dashboard.jsx"
import UserProfile from "../profile/views/UserProfile.jsx";
import TableList from "../profile/views/TableList.jsx";
import Research from "../profile/views/Research.jsx";
import Icons from "../profile/views/Icons.jsx";
import IconPosts from "../profile/views/IconPosts.jsx"
import Posts from "./views/Posts.jsx";
// import Notifications from "../profile/views/Notifications.jsx";
import Upgrade from "../profile/views/Upgrade.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/profile/admin"
  },
  {
    path: "/posts",
    name: "My Posts",
    icon: "pe-7s-leaf",
    component: Posts,
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
    name: "ML Data",
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
  },
  {
    path: "/iconposts/:id",
    name: "IconPosts",
    icon: "pe-7s-bell",
    component: IconPosts,
    layout: "/profile/admin",
    invisible: true
  },
  {
    upgrade: true,
    path: "/upgrade",
    name: "Contact Us",
    icon: "pe-7s-rocket",
    component: Upgrade,
    layout: "/profile/admin"
  }
];

export default dashboardRoutes;
