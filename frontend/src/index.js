import React from 'react';
import ReactDOM from 'react-dom';
import "./main.css";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css"


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

