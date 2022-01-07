import { Navbar,Nav,NavDropdown,Form,Button,FormControl,Container,Carousel } from 'react-bootstrap';
import './App.css';

import React, { useState, useContext } from 'react';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';

import Data from './data.js'
import Detail from './detail.js'
import Basket from './basket.js'


let sizeContext = React.createContext();

function App() {

  let [shoesData, shoesData_change] = useState(Data);
  let [size, size_change] = useState([250,260,280]);
  

  return (
    <div className="App">
          <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">SM's Shop</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link as={Link} to="/"> Home </Nav.Link>
            <Nav.Link as={Link} to="/detail"> Detail </Nav.Link>
            </Nav>
            </Container>
          </Navbar>

            <Route path="/"> 
              <img
                src="/imgs/appre.png"
                alt="thank_you"
                style={ {align:"center", width:"30%"} }
              />
              <br/>
              <br/>
              <h3>오늘의 신발 세일</h3>
              <br/>

              <div className="container">
                <div className="row">
                  {
                    shoesData.map(function(item,cnt){
                      return(
                          <ShoesList data={shoesData[cnt]} key={cnt}></ShoesList>
                      )
                    })
                  }
                </div>
                <br/>
                <button className="btn btn-primary" onClick={()=>{ 
                  axios.get('/data.js')
                  .then((result)=>{ console.log(result.data) })
                  .catch(()=>{ alert("실패!") })
            
                   }}>다음 페이지</button>

                &nbsp;
                <button className="btn btn-primary" onClick={()=>{ 
                  axios.post('/data.js')
                  .then((result)=>{ console.log(result.data) })
                  .catch(()=>{ alert("실패!") })
            
                   }}>글쓰기</button>   

                <br/><br/>

              </div>
            </Route>
            
            <Route path="/detail/:id">
              <Detail data={shoesData}></Detail>
              <Basket></Basket>
            </Route>

            <Route path="/ContextAPI">
              <sizeContext.Provider value={size}>
                <CompoTest/>
              </sizeContext.Provider>
            </Route> 

            <Route path="/basket">
              <Basket></Basket>
            </Route> 
    </div>
  );
}

function ShoesList(props){
  let history = useHistory();
  return(
    <div className="col-md-4" onClick={()=>{history.push("/detail/"+props.data.id)}}>
      <img src={props.data.img} width="100%" />
      <h4>{props.data.title}</h4>
      <p>{props.data.content} & {props.data.price}</p>
    </div>
  )
}

function CompoTest(){
  let this_size = useContext(sizeContext);
  return(
    <div >
        <h3>Context API - 1</h3>
        {
          this_size.map(function(item,cnt){
            return(
              <div>
                {item}
              </div>
            )
          })
        }
        <br/><br/>
        <CompoTest2></CompoTest2>
    </div>
  )
}

function CompoTest2(){
  let this_size = useContext(sizeContext);
  return(
    <div>
      <h3>Context API - 2</h3>
      <p>재고 : {this_size}</p>
    </div>
  )
}
export default App;
