import React, { Component } from "react";
import { Container, Row, Col, Table, Form, Button, Carousel, ProgressBar } from "react-bootstrap";
import ChartistGraph from "react-chartist";
import axios from "axios";
import Card from "../components/Card/Card.jsx";
import { thArray } from "../variables/Variables.jsx";
// import IGback from '../../../images/igback.jpg'


class TableList extends Component {

state = {tag:"Awesome", hashtags:[]}
  
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

addHashtag = (newTag) => {
  console.log("addHashtag Log",newTag);
  // this.setState({
  //   hashtags: [...this.state.hashtags,newTag]
  // }).then( res => {
  //   console.log("2nd addHashtag log after state is set",this.satate)
  // })
}

  render() {
    if (this.state.hashtagResultWord !== undefined && this.state.hashtagResultTrending !== undefined &&  this.state.tag !== 'undefined' && this.state.hashtagResultWordHistory !== undefined && this.state.hashtagResultWordHistory.data !== undefined) {
    console.log("Current State at Render", this.state)

let values=[]

var dataSales = {
  labels: 
    this.state.hashtagResultWordHistory.data.map((currentDate) => {
      // console.log(currentDate)
      return (
        String(currentDate.date.slice(5,10))

      )
    })

  ,
  series: [
    this.state.hashtagResultWordHistory.data.map((currentExposure) => {
      // console.log("Hereeeeeeee",currentExposure)
      values.push(currentExposure.exposure)
      return (
        String(currentExposure.exposure)
      )
    })
  ]
  
};

// let sum = values.reduce((previous, current) => current += previous);

var optionsSales = {
  low: 0,
  // high: ((((values.reduce((previous, current) => current += previous))/values.length)+((values.reduce((previous, current) => current += previous))))*0.18).toExponential(2),
  showArea: false,
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

const pickColor = (color) => {
  if(color == 0){
    return "danger"
  } else if (color == 1){
    return "warinig"
  } else if (color == 2){
    return "info"
  } else {
    return "success"
  }
}

const pickSize = (color) => {
  if(color == 0){
    return 25
  } else if (color == 1){
    return 50
  } else if (color == 2){
    return 75
  } else {
    return 100
  }
}



    return (
      // <div class="content" style={{
      //   backgroundImage: `url(${IGback})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   // height: "20vh"
      // }}>        
      
      <div className="content"> 
      <div className="display-3">#TrendingNow</div>
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
          <Form.Group className="d-flex flex-row align-items-center" role="form" >
              <Form.Control onChange={this.changeTag}  name="tagChanger" size="lg" type="text" placeholder="#SearchForAnything" style={{borderColor:"#42D0ED",backgroundColor:"white"}}/>
              <br />
              <Button className="ml-2" variant="info" type="submit" style={{padding:"0.5rem", height:"5%", backgroundColor:"white"}}>#</Button> 
          </Form.Group>
          </Form >



          <Row>
          <Col md={12} >
            <Card
              // style={{borderColor:"#42D0ED"}}
              // style={{ boxShadow: "0 1px 2px #42D0ED, 0 0 0 1px #42D0ED"}}
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

        {/* The whole usage index thing goes here */}

        <Row>


        </Row>



          <Row>
            <Col md={12}>
              <Card
                title={"#"+this.state.tag+" & Related Hashtags"}
                category="Per hour"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover style= {{ overflowX: "scroll" }}>
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
                            <td><Button variant="info" onClick={() => this.addHashtag(currentTag.hashtag)} >Add</Button></td>
                            <td>{"#"+currentTag.hashtag}</td>
                            <td style={{textAlign:"right"}}>{currentTag.exposure.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</td>
                            <td style={{textAlign:"right"}}>{currentTag.images}</td>
                            <td style={{textAlign:"right"}}>{currentTag.links}</td>
                            <td style={{textAlign:"right"}}>{currentTag.mentions}</td>
                            <td style={{textAlign:"right"}}>
                              <div>
                                <ProgressBar variant={pickColor(currentTag.color)} now={pickSize(currentTag.color)} />
                              </div>
                            </td>
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
