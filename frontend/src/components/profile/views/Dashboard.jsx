
import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import actions from "../../../services/index";
import { Card } from "../components/Card/Card.jsx";
import { StatsCard } from "../components/StatsCard/StatsCard.jsx";
import { FoodTasks} from "../components/Tasks/foodTasks";
import { FashionTasks } from "../components/Tasks/fashionTasks";
import { LifestyleTasks } from "../components/Tasks/lifestyleTasks";
import { PhotographyTasks } from "../components/Tasks/photographyTasks";

import {
  // dataSales,
  // dataPie,
  // legendPie,
  // optionsSales,
  // responsiveSales,
  // legendSales,
  // dataBar,
  // optionsBar,
  // responsiveBar,
  legendBar
} from "../variables/Variables.jsx";

 // Configuration Array for the Formating of the Follower Count
const countFormat =
[
  { // 0 - 999
    letter: '',
    limit: 1e3
  },
  { // 1,000 - 999,999
    letter: 'K',
    limit: 1e6
  },
  { // 1,000,000 - 999,999,999
    letter: 'M',
    limit: 1e9
  },
  { // 1,000,000,000 - 999,999,999,999
    letter: 'B',
    limit: 1e12
  },
  { // 1,000,000,000,000 - 999,999,999,999,999
    letter: 'T',
    limit: 1e15
  }
];

class Dashboard extends Component {
  
  state = {
    
  };

   async componentDidMount() {
    let user = await actions.isLoggedIn();
    this.setState({ ...user.data }); 
    // console.log("Current User >> ", user);

     await axios
       // .get("http://localhost:5000/profile/" + this.state.igUsername)
       .get(
         "https://cors-anywhere.herokuapp.com/https://engagementml.herokuapp.com/profile/" +
           this.state.igUsername
       )
       .then(res => {
         // console.log(res, res.data);
         this.setState({
           profile: res.data
         });
       })
       .catch(function(error) {
         console.log(error);
       });

     await axios
       .get(
         "https://cors-anywhere.herokuapp.com/https://engagementml.herokuapp.com/posts/" +
           this.state.profile.id
       )
       .then(res => {
         // console.log(res, res.data);
         this.setState({
           posts: res.data
         });
       })
       .catch(function(error) {
         console.log(error);
       });

       let videoCount = this.state.posts.filter((val) => {
         return val.is_video;
       });

       this.setState({
         videoCount: videoCount.length,
         videoPercentage: (videoCount.length / this.state.posts.length).toFixed(1) * 100,
         postCount: this.state.posts.length - videoCount.length,
         postPercentage: ((this.state.posts.length - videoCount.length) / this.state.posts.length).toFixed(1) * 100,
       });

     await axios
       // .get("http://localhost:5000/eML/user/" + this.props.match.params.id)
       .get(
         "https://cors-anywhere.herokuapp.com/https://engagementml.herokuapp.com/eML/user/" +
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

  actualTask(industry){
    if (industry==="Food"){
      return <FoodTasks />
    } else if (industry==="Fashion & Style"){
      return <FashionTasks />
    } else if (industry==="Photography") {
      return <PhotographyTasks />
    } else {
      // Lifestyle here
      return <LifestyleTasks />
    }
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

  // countVideos = () => {
  //   // let videoCount = this.state.posts.filter((val) => {
  //   //   return val.is_video;
  //   // });
  //   //   this.setState({
  //   //     videoCount: videoCount.length,
  //   //     videoPercentage: (videoCount.length / this.state.posts.length).toFixed(0),
  //   //     postCount: videoCount.length - this.state.posts.length,
  //   //     postPercentage: ((videoCount.length - this.state.posts.length) / this.state.posts.length).toFixed(0),
  //   //   });
  //   // return (videoCount.length / this.state.posts.length).toFixed(0)
  // }
    
// Format Method:
formatCount = (value) => {
  let format = countFormat.find(format => (value < format.limit));

  value = (1000 * value / format.limit);
  value = Math.round(value * 10) / 10; // keep one decimal number, only if needed

  return (value + format.letter);
}

  render() {

    // .toLocaleString(navigator.language, { minimumFractionDigits: 1 })

if (this.state.email !== undefined && this.state.profile !== undefined && this.state.posts !== undefined) {

// console.log(this.props);
console.log(this.state);

// Data for Line Chart
var dataSales = {

  labels: 
    // Here goes the engagement data
      this.state.posts.sort(function(x, y){
        return x.date - y.date;
      }).map((currentPost) => {
        // console.log(currentPost)
        let a = new Date(currentPost.date * 1000);
        // let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let year = Number(a.getFullYear().toString().slice(2,4));
        let month = a.getMonth()+1;
        let date = a.getDate();
        let time = month+"/"+date+"/"+year;
        // console.log(time);
        return (
          String(time)
        )
    })
  ,
  series: [
    // Here goes the data of engagement from the last 12 posts
    this.state.posts.map((currentPost) => {
      // console.log(currentPost)
      // console.log("HEREEEEE", currentPost.like_count);
     let er = (((currentPost.like_count + currentPost.comment_count) / this.state.profile.edge_followed_by.count) * 100).toFixed(1)
    //  console.log("HERE 222222", er)
      return (
        er
      )
  })

  ]
};

var optionsSales = {
  low: 0,
  // high: 800,
  showArea: true,
  height: "245px",
  axisX: {
    showGrid: false
  },
  lineSmooth: true,
  showLine: true,
  showPoint: true,
  fullWidth: true,
  chartPadding: {
    right: 50
  }
};

var responsiveSales = [
  [
    "screen and (max-width: 640px)",
    {
      axisX: {
        labelInterpolationFnc: function(value) {
          return value[0];
        }
      }
    }
  ]
];

var legendSales = {
  names: ["You - eML  "],
  types: ["info"]
};

var legendPie = {
  names: [
    "Videos (" + this.state.videoCount + " count)  ",
    "Images (" + this.state.postCount + " count)  ",
  ],
  types: ["info", "danger"],
};

var dataPie = {
  labels: [this.state.videoPercentage + "%", this.state.postPercentage + "%"],
  series: [this.state.videoPercentage, this.state.postPercentage],
};

var optionsPie = {
  donut: true,
  // donutWidth: 60,
  // donutSolid: true,
  startAngle: 270,
  showLabel: true,
};

  return (
    <div className="content">
      <Container fluid="true">
        <Row>
          <Col lg={3} sm={6}>
            <StatsCard
              bigIcon={<i className="pe-7s-users text-primary " />}
              statsText="Instagram Followers"
              statsValue={
                this.state.post !== []
                  ? this.formatCount(this.state.profile.edge_followed_by.count)
                  : "N/A"
              }
              statsIcon={<i className="pe-7s-refresh-2" />}
              statsIconText="Updated today"
            />
          </Col>
          <Col lg={3} sm={6}>
            <StatsCard
              bigIcon={<i className="pe-7s-leaf text-success" />}
              statsText="Engagement Rate (eML)"
              statsValue={
                this.state.posts !== []
                  ? (
                      ((this.state.posts[this.state.posts.length - 1]
                        .like_count +
                        this.state.posts[this.state.posts.length - 1]
                          .comment_count) /
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
              statsText="Engagement Change"
              statsValue={
                this.state.posts !== []
                  ? (
                      ((this.state.posts[this.state.posts.length - 1]
                        .like_count +
                        this.state.posts[this.state.posts.length - 1]
                          .comment_count) /
                        this.state.profile.edge_followed_by.count) *
                        100 -
                      ((this.state.posts[this.state.posts.length - 2]
                        .like_count +
                        this.state.posts[this.state.posts.length - 2]
                          .comment_count) /
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
              statsText="Engagement Rate (eML)"
              statsValue={
                this.state.posts !== []
                  ? (
                      ((this.state.posts[this.state.posts.length - 2]
                        .like_count +
                        this.state.posts[this.state.posts.length - 2]
                          .comment_count) /
                        this.state.profile.edge_followed_by.count) *
                      100
                    ).toFixed(1) + "%"
                  : "N/A"
              }
              statsIcon={<i className="pe-7s-refresh-2" />}
              statsIconText="Previous Post"
            />
          </Col>
          {/* <Col lg={3} sm={6}>
            <StatsCard
              bigIcon={<i className="pe-7s-users text-primary " />}
              statsText="Followers"
              statsValue={
                this.state.profile !== []
                  ? this.state.profile.edge_followed_by.count.toLocaleString(navigator.language, { minimumFractionDigits: 0 })
                  : "N/A"
              }
              statsIcon={<i className="pe-7s-refresh-2" />}
              statsIconText="Updated today"
            />
          </Col> */}
        </Row>
        <Row>
          <Col md={8}>
            <Card
              statsIcon="fa fa-history"
              id="chartHours"
              title="Engagement Over Time"
              category="Last 12 Posts"
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
              // style={{weight:"5rem"}}
              content={
                // <img
                //   src="https://engagementmlapp.s3.amazonaws.com/img/pie.png"
                //   height="275"
                //   alt="placeholder"
                // />
                <div
                  id="chartPreferences"
                  className="ct-chart ct-perfect-fourth"
                >
                  <ChartistGraph
                    data={dataPie}
                    type="Pie"
                    options={optionsPie}
                  />
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
                <img
                  src="https://engagementmlapp.s3.amazonaws.com/img/graph.png"
                  style={{ width: "20rem" }}
                  alt="placeholder"
                />
                //   <div className="ct-chart">
                //     <ChartistGraph
                //       data={dataBar}
                //       type="Bar"
                //       options={optionsBar}
                //       responsiveOptions={responsiveBar}
                //     />
                //   </div>
              }
              legend={
                <div className="legend">{this.createLegend(legendBar)}</div>
              }
            />
          </Col>

          <Col md={6}>
            <Card
              title="eML Optimization Recommendations"
              category={`Based on your data vs ${this.state.industry} Influencers`}
              stats="Updated Daily"
              statsIcon="fa fa-history"
              content={
                <div className="table-full-width">
                  <table className="table">
                    {/* <Tasks /> */}

                    <React.Fragment>
                      {/* Uncomment the bottom to try the tasks out */}

                      {this.actualTask(this.state.industry)}
                    </React.Fragment>
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
