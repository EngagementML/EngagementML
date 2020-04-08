import React, { Component, useState } from "react";
import { Container, Row, Col, Table, Form, Button, Carousel, ProgressBar,Collapse } from "react-bootstrap";
// import React, { useState } from 'react';
import actions from "../../../services/index";
import ChartistGraph from "react-chartist";
import axios from "axios";
import Card from "../components/Card/Card.jsx";
import { thArray } from "../variables/Variables.jsx";
// import IGback from '../../../images/igback.jpg'


class TableList extends Component {

state = {tag:"Awesome", hashtags:[]}
  
async componentDidMount(){

  let user = await actions.isLoggedIn();
  this.setState({ ...user.data });
  console.log("Current User >> ", user);

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

sendPost = async () => {
  console.log("2nd addHashtag log after state is set",this.state)
  // const newObj = {hashtags:this.state.hashtags}
  const obj = {
    email: this.state.email,
    name: this.state.name,
    fname: this.state.fname,
    lname: this.state.lname,
    igUsername: this.state.igUsername,
    image: this.state.image,
    about: this.state.about,
    industry: this.state.industry,
    hashtags:this.state.hashtags
    // role: this.state.role,
    // competitor: this.state.competitor,
  };
  console.log("Behold thyy hashtags ------->",this.state.hashtags)
  await axios.post(`https://engagementml.herokuapp.com/eML/users/update/`+ this.state._id,obj)
    .then(res => console.log(res.data));
    alert(`Added #${this.state.hashtags} to collection!`);
}


addHashtag = async (e) => {
  e.preventDefault()
  console.log("addHashtag Log",e.target.value);
  await this.setState({
    email: this.state.email,
    name: this.state.name,
    fname: this.state.fname,
    lname: this.state.lname,
    igUsername: this.state.igUsername,
    image: this.state.image,
    about: this.state.about,
    industry: this.state.industry,
    hashtags: [...this.state.hashtags, e.target.value]
  })
  console.log(this.state)
  this.sendPost()
}



  render() {
    if (this.state.hashtagResultWord !== undefined && this.state.hashtagResultTrending !== undefined &&  this.state.tag !== 'undefined' && this.state.hashtagResultWordHistory !== undefined && this.state.hashtagResultWordHistory.data !== undefined) {
    console.log("Current State at Render", this.state)

// Format Method:

// const countFormat =
// [
//   { // 0 - 999
//     letter: '',
//     limit: 1e3
//   },
//   { // 1,000 - 999,999
//     letter: 'K',
//     limit: 1e6
//   },
//   { // 1,000,000 - 999,999,999
//     letter: 'M',
//     limit: 1e9
//   },
//   { // 1,000,000,000 - 999,999,999,999
//     letter: 'B',
//     limit: 1e12
//   },
//   { // 1,000,000,000,000 - 999,999,999,999,999
//     letter: 'T',
//     limit: 1e15
//   }
// ];

// const formatCount = (value) => {
//   let format = countFormat.find(format => (value < format.limit));

//   value = (1000 * value / format.limit);
//   value = Math.round(value * 10) / 10; // keep one decimal number, only if needed

//   return (value + format.letter);
// }


// const sendPost = async function (newTag){
//   console.log("2nd addHashtag log after state is set",this.state)
//   const newObj = {hashtags:this.state.hashtags}
//   console.log("Behold thyy hashtags ------->",this.state.hashtags)
//   await axios.post("https://engagementml.herokuapp.com/eML/users/update/" + this.props.match.params.id,newObj)
//     .then(res => console.log(res.data));
//     alert(`Added #${newTag} to collection!`);
// }


// const addHashtag = async function (e, newTag) {
//   console.log("addHashtag Log",newTag);
//   await this.setState({
//     hashtags: [newTag]
//   })
//   sendPost(newTag)

// }

// const sendPost =  function (newTag){
//   console.log("2nd addHashtag log after state is set",this.state)
//   const newObj = {hashtags:this.state.hashtags}
//   console.log("Behold thyy hashtags ------->",this.state.hashtags)
//   await axios.post("https://engagementml.herokuapp.com/eML/users/update/" + this.props.match.params.id,newObj)
//     .then(res => console.log(res.data));
//     alert(`Added #${newTag} to collection!`);
// }



const groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

function InfoButtons() {
  const [open, setOpen] = useState(false);

  return (
    <>
    
    {/* <Row> */}
    <div className="d-flex flex-row justify-content-center">

    <Col md={3} className="d-flex flex-row justify-content-left"  > 
       <div >
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="mb-4"
        style={{backgroundColor:"#DC3545", borderColor:"white", color:"white", borderRadius:"1rem"}}

        >
        Color Info
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text" className="mb-1" style={{fontFamily:"monospace"}} >
          This hashtag is unused.
        </div>
      </Collapse>
        </div>
        </Col>

        <Col md={3} className="d-flex flex-row justify-content-left"  > 
        <div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="mb-4"
        style={{backgroundColor:"#FFC107", borderColor:"white", color:"white", borderRadius:"1rem"}}

        >
        Color Info
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text" className="mb-1" style={{fontFamily:"monospace"}}>
        This hashtag is overused.
        </div>
      </Collapse>
        </div>
        </Col>

        <Col md={3} className="d-flex flex-row justify-content-left"  > 
        <div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="mb-4"
        style={{backgroundColor:"#17A2B8", borderColor:"white", color:"white", borderRadius:"1rem"}}
        >
        Color Info
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text" className="mb-1" style={{fontFamily:"monospace"}}>
        Use hashtags with this color to get seen over time.
        </div>
      </Collapse>
        </div>
        </Col>

        <Col md={3} className="d-flex flex-row justify-content-left"  > 
        <div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="mb-4"
        style={{backgroundColor:"#28A745", borderColor:"white", color:"white", borderRadius:"1rem"}}
                >
        Color Info
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text" className="mb-1" style={{fontFamily:"monospace"}}>
        Use hashtags with this color to get seen now.
        </div>
      </Collapse>
        </div>
        </Col>

        </div>
        {/* </Row> */}
    </>
    
  );
}

let values=[]

var dataLine = {
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

var dataPie = {
    series: [20, 10, 30]
  // series: [
  //   groupBy(
  //     this.state.hashtagResultWordHistory.data.map((currentPoint) => {
  //     console.log("Hereeeeeeee",currentPoint)
  //     // values.push(currentPoint.color)
  //     return (
  //       String(currentPoint.color)
  //     )
  //   }),"length"
  //   )
  // ]
  
};

// let sum = values.reduce((previous, current) => current += previous);

var optionsLine = {
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

var optionsPie = {
  donut: true,
  donutWidth: 60,
  startAngle: 270,
  total: 200,
  showLabel: false
}

var responsiveLine = [
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
              statsIcon="fa fa-history"
              id="chartHours"
              title={"#"+this.state.tag+" Impressions"}
              category={`Last 30 Days of #${this.state.tag}`}
              stats="Updated today"
              content={
                <div className="ct-chart">
                  <ChartistGraph
                    // labelFontWeight="900"
                    data={dataLine}
                    type="Line"
                    options={optionsLine}
                    responsiveOptions={responsiveLine}
                  />
                </div>
              }
            />
          </Col>
          
        </Row>

         <Row>
          <div className="col">
          <InfoButtons />
          </div>

          {/* <div className="col auto">
          
          <Card
            statsIcon="fa fa-history"
            id="chartHours"
            title={"#"+this.state.tag+" Usage"}
            category="Last 30"
            stats="Updated today"
            style = {{}}
            content={
              <div className="ct-chart">
                <ChartistGraph
                  // labelFontWeight="900"
                  data={dataPie}
                  type="Pie"
                  options={optionsPie}
                  // responsiveOptions={responsiveLine}
                />
              </div>
            }
          />
          </div> */}

       

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

                      {this.state.hashtagResultWord.data.sort(function(x, y){
                          return y.color - x.color;
                        }).map((currentTag) => {
                        return (
                          <tr>
                            <td><Button variant="info" onClick={(e) => this.addHashtag(e)} name="hashtags" value={currentTag.tag} >Add</Button></td>
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
