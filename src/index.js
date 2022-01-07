import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

// default store 선언
let defaultStore = [
  {id : 0, name : 'White and Red', stock : 2}, 
  {id : 1, name : 'White and Green', stock : 2}, 
  {id : 2, name : 'White and Blue', stock : 2}
];

// reducer 선언
function reducer(store=defaultStore, action){
  if (action.type == 'stockCntPlus') {
    let copy = [...store];
    copy[action.id].stock++;
    return copy
  } else if(action.type == 'stockCntMinus'){
    let copy = [...store];
    copy[action.id].stock--;
    return copy
  } else if(action.type == 'goodsAdd'){
    //let index = store.findIndex((i)=>{return i.id == action.data.id});
    let copy = [...store];

    var check = false;
    for(var i=0;i<copy.length;i++){
      if(action.data.id == copy[i].id){
        check=true;
        copy[i].stock++;
        break;
      }
    }

    // 추가하려는 데이터가 존재하지 않을 때
    if(check == false){
      copy.push(action.data);
      return copy
    }
    // 추가하려는 데이터가 이미 존재할 때
    else{
      return copy;
    }
  }else {
    return store
  }
}

// basket.js의 alert 노출 여부 default store 선언
let defaultAlertStore = true;
//reducer 선언
function alertReducer(store=defaultAlertStore, action){
  if(action.type == 'alertCancel'){
    let temp = store
    return false;
  }else{
    return store;
  }
  
}

// store선언
// combineReducers 를 이용해 reducer, alertReducer 합치기
let store = createStore(combineReducers({reducer, alertReducer}));

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
