import React, { Component } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import axios from "axios";
import Card from "../components/Card/Card.jsx";
import { thArray } from "../variables/Variables.jsx";

class TableList extends Component {

state = {tag:"seo"}
  
componentDidMount(){
  // https://cors-anywhere.herokuapp.com/
  const HashtagCall = `https://api.ritekit.com/v1/stats/hashtag-suggestions?text=${this.state.tag}&client_id=0c6df3574f5c1c81c1541d575b506bcbcd261454eca9`
    axios.get(HashtagCall).then(result => {
    console.log("Full Result", result)
    this.setState({ hashtagResult: result.data })
  })
    .catch((err) => console.log("Can’t access " + HashtagCall, err))
}

  render() {
    if (this.state.hashtagResult !== undefined ) {
    console.log("Current State at Render", this.state)
    return (
      <div className="content">
        <Container fluid="true">
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
