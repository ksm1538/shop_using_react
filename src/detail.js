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
    useEffect(()=>{
      setTimeout( ()=>{ setShow(false) }, 2000);
    });
    

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
                <p>재고가 얼마 남지 않았습니다</p>
              </div>
              :
              null
            }
          </div>
        </div>
    </div>  
    )
  };

export default Detail