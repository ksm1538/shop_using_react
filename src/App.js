import { Navbar,Nav,NavDropdown,Form,Button,FormControl,Container,Carousel } from 'react-bootstrap';
import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Data from './data.js'
import Detail from './detail.js'

function App() {

  let [shoesData, shoesData_change] = useState(Data);

  return (
    <div className="App">
          <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">SM's Shop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/detail">Detail</Link></Nav.Link>
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
              </div>
            </Route>
            
            <Route path="/detail/:id">
              <Detail data={shoesData}></Detail>
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
