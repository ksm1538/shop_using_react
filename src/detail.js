import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

function Detail(props){

    let history = useHistory();
    let { id } = useParams();

    let findGood = props.data.find(function(Good){
      return Good.id == id
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
          </div>
        </div>
    </div>  
    )
  };

export default Detail