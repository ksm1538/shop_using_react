import { Navbar,Nav,NavDropdown,Form,Button,FormControl,Container,Carousel } from 'react-bootstrap';
import React, { useState } from 'react';
import './App.css';
import Data from './data.js'

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
