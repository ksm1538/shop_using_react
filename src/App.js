import { Navbar,Nav,NavDropdown,Form,Button,FormControl,Container,Carousel } from 'react-bootstrap';
import React, { useState } from 'react';
import './App.css';
import Data from './data.js'
import { Link, Route, Switch } from 'react-router-dom';

function App() {

  let [shoesData, shoesData_change] = useState(Data);

  return (
    <div className="App">
          <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Container>
          </Navbar>

            <Route path="/"> 
              <img
                src="./appre.png"
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
              </div>
            </Route>
            <Route path="/detail">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <img src="./20211222_223425.jpg" width="100%" />
                  </div>
                  <div className="col-md-6 mt-4">
                    <h4 className="pt-5">상품명</h4>
                    <p>상품설명</p>
                    <p>140000원</p>
                    <button className="btn btn-danger">주문하기</button> 
                  </div>
                </div>
              </div> 
            </Route>
    </div>
  );
}

function ShoesList(props){
  return(
    <div className="col-md-4">
      <img src={props.data.img} width="100%" />
      <h4>{props.data.title}</h4>
      <p>{props.data.content} & {props.data.price}</p>
      </div>
  )
}

export default App;
