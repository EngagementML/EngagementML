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
import ChartistGraph from "react-chartist";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import actions from "../../../services/index";
import { Card } from "../components/Card/Card.jsx";
import { StatsCard } from "../components/StatsCard/StatsCard.jsx";
import { Tasks } from "../components/Tasks/Tasks.jsx";
import {
  dataSales,
  dataPie,
  legendPie,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "../variables/Variables.jsx";

// var dataPie = {
//   labels: ["40%", "20%", "40%"],
//   series: [40, 20, 40]
// };

// var legendPie = {
//   names: ["Image  ", "Video  ", "IGTV  "],
//   types: ["info", "danger", "warning"]
// };

class Dashboard extends Component {
  
  state = {
    
  };

   async componentDidMount() {
    let user = await actions.isLoggedIn();
    this.setState({ ...user.data });
    // console.log("Current User >> ", user);

     await axios
      // .get("http://localhost:5000/profile/" + this.state.igUsername)
      .get("https://engagementml.herokuapp.com/profile/" + this.state.igUsername)
      .then(res => {
        // console.log(res, res.data);
        this.setState({
          profile: res.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });

     await axios.get("https://engagementml.herokuapp.com/posts/" + this.state.profile.id)
      .then(res => {
        // console.log(res, res.data);
        this.setState({
          posts: res.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });

     await axios
      // .get("http://localhost:5000/eML/user/" + this.props.match.params.id)
      .get(
        "https://engagementml.herokuapp.com/eML/user/" +
          this.props.match.params.id
      )
      .then(res => {
        this.setState({
          email: res.data.email,
          name: res.data.name,
          fname: res.data.fname,
          lname: res.data.lname,
          igUsername: res.data.igUsername,
          image: res.data.image,
          about: res.data.about,
          industry: res.data.industry
          // role: res.data.role,
          // competitor: res.data.competitor,
        });
      })
      .catch(function(error) {
        console.log(error);
      });

    
  }

  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }

  splitPostType = () => {
    this.state.posts.reduce((sums, entry) => {
      sums[entry.is_video] = (sums[entry.is_video] || 0) + 1;
      return sums;
    }, {});
  }

  render() {
    // if (this.state.profile.edge_followed_by.count !== undefined) {
      console.log(this.props);
      console.log(this.state);
if (this.state.email !== undefined && this.state.profile !== undefined && this.state.posts !== undefined ) {
  return (
    <div className="content">
      <Container fluid="true">
        <Row>
          <Col lg={3} sm={6}>
            <StatsCard
              bigIcon={<i className="pe-7s-leaf text-success" />}
              statsText="eML Rate"
              statsValue={
                this.state.posts !== []
                  ? (
                      ((this.state.posts[0].like_count +
                        this.state.posts[0].comment_count) /
                        this.state.profile.edge_followed_by.count) *
                      100
                    ).toFixed(1) + "%"
                  : "N/A"
              }
              statsIcon={<i className="pe-7s-refresh-2" />}
              statsIconText="Lastest Post"
            />
          </Col>
          <Col lg={3} sm={6}>
            <StatsCard
              bigIcon={<i className="pe-7s-graph1 text-danger" />}
              statsText="Rate Change"
              statsValue={
                this.state.posts !== []
                  ? (
                      ((this.state.posts[0].like_count +
                        this.state.posts[0].comment_count) /
                        this.state.profile.edge_followed_by.count) *
                        100 -
                      ((this.state.posts[1].like_count +
                        this.state.posts[1].comment_count) /
                        this.state.profile.edge_followed_by.count) *
                        100
                    ).toFixed(1) + "%"
                  : "N/A"
              }
              statsIcon={<i className="pe-7s-refresh-2" />}
              statsIconText="Last Two Posts"
            />
          </Col>
          <Col lg={3} sm={6}>
            <StatsCard
              bigIcon={<i className="pe-7s-leaf text-warning" />}
              statsText="eML Rate"
              statsValue={
                this.state.profile !== []
                  ? (((this.state.posts[1].like_count +
                      this.state.posts[1].comment_count) /
                      this.state.profile.edge_followed_by.count) *
                    100).toFixed(1) + '%'
                  : "N/A"
              }
              statsIcon={<i className="pe-7s-refresh-2" />}
              statsIconText="Previous Post"
            />
          </Col>
          <Col lg={3} sm={6}>
            <StatsCard
              bigIcon={<i className="pe-7s-users text-primary " />}
              statsText="Followers"
              statsValue={
                this.state.profile !== []
                  ? this.state.profile.edge_followed_by.count
                  : "N/A"
              }
              statsIcon={<i className="pe-7s-refresh-2" />}
              statsIconText="Updated today"
            />
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <Card
              statsIcon="fa fa-history"
              id="chartHours"
              title="User Engagement by Time of Day"
              category="24 Hours performance"
              stats="Updated today"
              content={
                <div className="ct-chart">
                  <ChartistGraph
                    data={dataSales}
                    type="Line"
                    options={optionsSales}
                    responsiveOptions={responsiveSales}
                  />
                </div>
              }
              legend={
                <div className="legend">{this.createLegend(legendSales)}</div>
              }
            />
          </Col>
          <Col md={4}>
            <Card
              statsIcon="fa fa-clock-o"
              title="Post Type"
              category="Last 12 Posts"
              stats="Updated today"
              content={
                <div
                  id="chartPreferences"
                  className="ct-chart ct-perfect-fourth"
                >
                  <ChartistGraph data={dataPie} type="Pie" />
                </div>
              }
              legend={
                <div className="legend">{this.createLegend(legendPie)}</div>
              }
            />
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Card
              id="chartActivity"
              title="Engagement Levels"
              category="You vs. Competitor"
              stats="Data information certified"
              statsIcon="fa fa-check"
              content={
                <div className="ct-chart">
                  <ChartistGraph
                    data={dataBar}
                    type="Bar"
                    options={optionsBar}
                    responsiveOptions={responsiveBar}
                  />
                </div>
              }
              legend={
                <div className="legend">{this.createLegend(legendBar)}</div>
              }
            />
          </Col>

          <Col md={6}>
            <Card
              title="eML Optimization Recommendations"
              category="Fix to Optimize your Strategy"
              stats="Updated 3 minutes ago"
              statsIcon="fa fa-history"
              content={
                <div className="table-full-width">
                  <table className="table">
                    <Tasks />
                  </table>
                </div>
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
} else {
  return (
    <div>
      <h3 className="loading" style={{ textAlign: "center" }}>
        Loading...
      </h3>
    </div>
  );
}
  }
}

export default Dashboard;
