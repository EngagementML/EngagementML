import React, { Component } from "react";
import { Container, Row, Col, Table, Form, Button } from "react-bootstrap";
import axios from "axios";
import Card from "../components/Card/Card.jsx";
import { thArray } from "../variables/Variables.jsx";

class TableList extends Component {

state = {tag:"Awesome"}
  
componentDidMount(){
  this.getData()
}

getData() {
  const HashtagCall = `https://cors-anywhere.herokuapp.com/https://api.ritekit.com/v1/stats/hashtag-suggestions?text=${this.state.tag}&client_id=0c6df3574f5c1c81c1541d575b506bcbcd261454eca9`
    axios.get(HashtagCall).then(result => {
    console.log("Full Result", result)
    this.setState({ hashtagResult: result.data })
  })
    .catch((err) => console.log("Can’t access " + HashtagCall, err))
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
    if (this.state.hashtagResult !== undefined && this.state.tag !== 'undefined') {
    console.log("Current State at Render", this.state)
    return (
      <div className="content">
        <Container fluid="true">
          {/* This below works like Gustavo's ticker search bar but we'll run out of api calls */}
          {/* <Form.Group >
              <Form.Control onChange={this.ChangeTag} name="tagChanger" size="lg" type="text" placeholder="#Anything" />
              <br />
            </Form.Group> */}
          <Form onSubmit={this.updateTag} >
          <Form.Group className="d-flex flex-row align-items-center"role="form">
              <Form.Control onChange={this.changeTag}  name="tagChanger" size="lg" type="text" placeholder="#Anything" />
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
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>

                      {this.state.hashtagResult.data.map((currentTag) => {
                        return (
                          <tr>
                            <td>{"#"+currentTag.hashtag}</td>
                            <td>{currentTag.exposure}</td>
                            <td>{currentTag.images}</td>
                            <td>{currentTag.links}</td>
                            <td>{currentTag.mentions}</td>
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
