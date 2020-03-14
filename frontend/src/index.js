import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"
import "./main.css";
import "./noscript.css";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "font-awesome/css/font-awesome.min.css";


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

