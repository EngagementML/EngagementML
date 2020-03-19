import React, { Component } from "react";
import { Container, Row, Col, Table, Form, Button, Carousel, Header } from "react-bootstrap";
import axios from "axios";
import Card from "../components/Card/Card.jsx";
import { thArray } from "../variables/Variables.jsx";

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

  // const HashtagCallWordHistory = `https://cors-anywhere.herokuapp.com/https://api.ritekit.com/v1/stats/history/${this.state.tag}&client_id=0c6df3574f5c1c81c1541d575b506bcbcd261454eca9`
  //   axios.get(HashtagCallWordHistory).then(result => {
  //   console.log("Full Result Word History", result)
  //   this.setState({ hashtagResultWordHistory: result.data })
  // })
  //   .catch((err) => console.log("Can’t access " + HashtagCallWordHistory, err))
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
    if (this.state.hashtagResultWord !== undefined && this.state.hashtagResultTrending !== undefined &&  this.state.tag !== 'undefined') {
    console.log("Current State at Render", this.state)
    return (
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
                title="Industry Hashtags"
                category="Get creative"
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
            {/* Add second table here */}

           
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
        <React.Fragment>
            <p style={{ color: "black" }}>Loading Hashtag Stuff... </p>
        </React.Fragment>
        )
    }
  }
}

export default TableList;
