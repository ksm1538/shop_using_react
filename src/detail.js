import { Navbar,Nav,NavDropdown,Form,Button,FormControl,Container,Carousel } from 'react-bootstrap';
import {CSSTransition} from 'react-transition-group';

import React, {useState, useEffect}from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './detail.scss';

function Detail(props){

  let history = useHistory();
  let { id } = useParams();

  let findGood = props.data.find(function(Good){
    return Good.id == id
  });

  let Box = styled.div`
    padding : 20px;
  `;

  let H4size = styled.h4`
    font-Size : 20px;
    color : ${ props => props.color };
  `;

  // 알림창을 보여줄 지 말지 결정하는 스테이트 변수
  const [show, setShow] = useState(true);

  // Detail 컴포넌트가 마운트 or 재렌더링 되면 작동하는 코드
  // [show] 는 마운트 or 재렌더링 될 때 조건에 state 변수를 지정하는 것.
  // 이 컴포넌트가 마운트되거나 <조건[show state 변경]>으로 인하여 재렌더링 될 경우에 아래의 코드를 작동시켜주세요. 라는 뜻
  // useEffect()안에 return을 넣으면 컴포넌트가 언마운트 될 때 작동함.
  // 즉, Detail 컴포넌트가 언마운트 될 때 타이머를 초기화 시켜주세요. 라는 뜻
  useEffect(()=>{
    let timer = setTimeout( ()=>{ setShow(false) }, 2000);

    return ()=>{ clearTimeout(timer) }
  }, [ show ]);
  

  // 탭에 사용할 state 변수
  let [tab_cursor, setTab_cursor] = useState(0);

  // 애니메이션에 사용할 state 변수
  let [animation_switch, setAnimation_switch] = useState(false);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={findGood.img} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findGood.title}</h4>
          <p>{findGood.content}</p>
          <p>{findGood.price}</p>
          <button className="btn btn-danger">주문하기</button> 
          &nbsp;
          <button onClick={()=>{ history.goBack() }} className="btn btn-danger">뒤로가기</button> 

          <Box>
            <H4size className="red">빨간색 테스트.</H4size>
            <H4size color={'green'}>초록색 테스트.</H4size>
          </Box>
          {
            show==true?
            <div className="alert_SM">
              <p>이 알림 메시지는 2초 뒤에 사라집니다.</p>
            </div>
            :
            null
          }
        </div>
      </div>
      <br/><br/>
      <div>
      <Nav variant="tabs" defaultActiveKey="link-2">
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{setTab_cursor(1); setAnimation_switch(true)}}>Option 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={()=>{setTab_cursor(2); setAnimation_switch(false)}}>Option 2</Nav.Link>
        </Nav.Item>
      </Nav>
      <CSSTransition in={animation_switch} classNames="wow" timeout={500}>
        <TabContent tab_cursor={tab_cursor}></TabContent>
      </CSSTransition>      
      
      </div>
      <br/><br/>

  </div>  
  )
};

function TabContent(props){
  var tab_cursor = props.tab_cursor;
  if (tab_cursor == 0){
    return <div>내용0</div>
  } else if (tab_cursor == 1){
    return <div>내용1</div>
  } else if (tab_cursor == 2){
    return <div>내용2</div>
  }

}
export default Detail