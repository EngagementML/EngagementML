import React, { Component } from "react";
import { Container, Row, Col, Table, Form, Button, Carousel } from "react-bootstrap";
import ChartistGraph from "react-chartist";
import axios from "axios";
import Card from "../components/Card/Card.jsx";
import { thArray } from "../variables/Variables.jsx";
// import IGback from '../../../images/igback.jpg'


class TableList extends Component {

state = {tag:"Awesome"}
  
componentDidMount(){
  this.getData()

  const HashtagCallTrending = `https://cors-anywhere.herokuapp.com/https://api.ritekit.com/v1/search/trending?latin=1&client_id=0c6df3574f5c1c81c1541d575b506bcbcd261454eca9`
    axios.get(HashtagCallTrending).then(result => {
    console.log("Full Result Trending", result)
    this.setState({ hashtagResultTrending: result.data })
  })
    .catch((err) => console.log("Can’t access " + HashtagCallTrending, err))
}

getData() {
  const HashtagCallWord = `https://cors-anywhere.herokuapp.com/https://api.ritekit.com/v1/stats/hashtag-suggestions?text=${this.state.tag}&client_id=0c6df3574f5c1c81c1541d575b506bcbcd261454eca9`
    axios.get(HashtagCallWord).then(result => {
    console.log("Full Result Word", result)
    this.setState({ hashtagResultWord: result.data })
  })
    .catch((err) => console.log("Can’t access " + HashtagCallWord, err))

  // There's something wrong with the history api link

  const HashtagCallWordHistory = `https://cors-anywhere.herokuapp.com/https://api.ritekit.com/v1/stats/history/${this.state.tag}?client_id=0c6df3574f5c1c81c1541d575b506bcbcd261454eca9`
    axios.get(HashtagCallWordHistory).then(result => {
    console.log("Full Result Word History", result)
    this.setState({ hashtagResultWordHistory: result.data })
  })
    .catch((err) => console.log("Can’t access " + HashtagCallWordHistory, err))
}

changeTag = async (e) => {
  let value = e.target.value
  await this.setState({ tag: `${value}`}) 
  console.log("From on Change the state is", this.state)
}

updateTag = (e) =>{
  e.preventDefault()
  this.getData()
}

  render() {
    if (this.state.hashtagResultWord !== undefined && this.state.hashtagResultTrending !== undefined &&  this.state.tag !== 'undefined' && this.state.hashtagResultWordHistory !== undefined && this.state.hashtagResultWordHistory.data !== undefined) {
    console.log("Current State at Render", this.state)

let values=[]

var dataSales = {
  labels: 
    // "9:00AM",
    // "12:00AM",
    // "3:00PM",
    // "6:00PM",
    // "9:00PM",
    // "12:00PM",
    // "3:00AM",
    // "6:00AM"
    this.state.hashtagResultWordHistory.data.map((currentDate) => {
      console.log(currentDate)
      return (
        String(currentDate.date.slice(5,10))

      )
    })

  ,
  series: [
    this.state.hashtagResultWordHistory.data.map((currentExposure) => {
      console.log("Hereeeeeeee",currentExposure)
      values.push(currentExposure.exposure)
      return (
        String(currentExposure.exposure)
      )
    })
  ]
    // [287, 385, 490, 492, 554, 586, 698, 695],
    // [67, 152, 143, 240, 287, 335, 435, 437],
    // [23, 113, 67, 108, 190, 239, 307, 308]
  
};

// let sum = values.reduce((previous, current) => current += previous);

var optionsSales = {
  low: 0,
  // high: ((((values.reduce((previous, current) => current += previous))/values.length)+((values.reduce((previous, current) => current += previous))))*0.18).toExponential(2),
  showArea: true,
  // height: "245px",
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
    "screen and (max-width: 50rem)",
    {
      axisX: {
        labelInterpolationFnc: function(value) {
          return value[0];
        }
      }
    }
  ]
];



    return (
      // <div class="content" style={{
      //   backgroundImage: `url(${IGback})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   height: "20vh"
      // }}>        
      
      <div className="content">
      <h1 className="display-1">#Trending</h1>
      <Carousel>
      {this.state.hashtagResultTrending.tags.map((currentTag) => {
          return (
          <Carousel.Item>
            <h1 style={{color:"black",textAlign:"center"}} >{"#"+currentTag.tag}</h1>
            <h5 style={{color:"black",textAlign:"center"}} className="mb-5">{currentTag.exposure.toLocaleString(navigator.language, { minimumFractionDigits: 0 })+ " Impressions"}</h5>
          </Carousel.Item>
          )
          })
        }
      </Carousel>

        <Container fluid="true">
          {/* This below works like Gustavo's ticker search bar but we'll run out of api calls */}
          {/* <Form.Group >
              <Form.Control onChange={this.ChangeTag} name="tagChanger" size="lg" type="text" placeholder="#Anything" />
              <br />
            </Form.Group> */}
          <Form onSubmit={this.updateTag} >
          <Form.Group className="d-flex flex-row align-items-center"role="form">
              <Form.Control onChange={this.changeTag}  name="tagChanger" size="lg" type="text" placeholder="#SearchForAnything" />
              <br />
              <Button className="ml-2" variant="info" type="submit" style={{padding:"0.5rem", height:"5%"}}>#</Button>
          </Form.Group>
          </Form >



          <Row>
          <Col md={12}>
            <Card
              statsIcon="fa fa-history"
              id="chartHours"
              title={"#"+this.state.tag+" Impressions"}
              category="Last 30"
              stats="Updated today"
              content={
                // <div className="ct-chart" style={{fontSize:"20"}}>
                <div className="ct-chart">
                  <ChartistGraph
                    // labelFontWeight="900"
                    // style={{fontSize:"20"}}
                    data={dataSales}
                    type="Line"
                    options={optionsSales}
                    responsiveOptions={responsiveSales}
                    // style={{fontSize:"0.5rem"}}
                  />
                </div>
              }
              // // legend={
              // //   <div className="legend">{this.createLegend(legendSales)}</div>
              // }
            />
          </Col>
          
        </Row>



          <Row>
            <Col md={12}>
              <Card
                title={"#"+this.state.tag+" & Related Hashtags"}
                category="Per hour"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          if (prop==="Hashtag"){
                            return <th key={key} >{prop}</th>;
                          }else {
                            return <th key={key} style={{textAlign:"right"}}>{prop}</th>;
                          }
                        })}
                      </tr>
                    </thead>
                    <tbody>

                      {this.state.hashtagResultWord.data.map((currentTag) => {
                        return (
                          <tr>
                            <td>{"#"+currentTag.hashtag}</td>
                            <td style={{textAlign:"right"}}>{currentTag.exposure.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</td>
                            <td style={{textAlign:"right"}}>{currentTag.images}</td>
                            <td style={{textAlign:"right"}}>{currentTag.links}</td>
                            <td style={{textAlign:"right"}}>{currentTag.mentions}</td>
                          </tr>
                        )
                        })
                      }

                    </tbody>
                  </Table>
                }
              />
            </Col>
            {/* Add Graph here */}

          </Row>
         
         
        </Container>
      </div>

      // </div>
      
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

export default TableList;
