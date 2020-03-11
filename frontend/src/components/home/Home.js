import React, { Component } from 'react';
import actions from '../../services/index'
import HomeComp from "./HomeComponents/Home"

class Home extends Component {
  async componentDidMount() {
    //actions.test()
  }
  render() {
    return (
      <>
        <HomeComp />
        {/* <Footer /> */}
      </>
    );
  }
}

export default Home;
