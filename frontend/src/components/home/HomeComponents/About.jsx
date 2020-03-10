import React, { Component } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation/>
                <div className='container home page'>
                    <h1>This is the About page!</h1>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default About;