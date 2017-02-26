import React from 'react';
import ReactDOM from 'react-dom';
import reducer from "./reducers/index";
import App from './App';
import {compose, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
