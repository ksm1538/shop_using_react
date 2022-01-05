import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

// default store 선언
let defaultStore = [{id : 0, name : 'reduxShoes', stock : 2}];

// reducer 선언
function reducer(store=defaultStore, action){
  if (action.type === 'stockCntPlus') {
    let copy = [...store];
    copy[0].stock++;
    return copy
  } else if(action.type === 'stockCntMinus'){
    let copy = [...store];
    copy[0].stock--;
    return copy
  } else {
    return store
  }
}

// store선언
let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store = {store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
