import React from 'react';
import {Table} from 'react-bootstrap';
import {connect} from 'react-redux';

function Basket(props){
  return (
    <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        { props.data.map((a,i)=>{
          return (
          <tr key={i}>
            <td>{a.id}</td>
            <td>{a.name}</td>
            <td>{a.stock}</td>
            <td>
                <button onClick={()=>{ props.dispatch({type: 'stockCntPlus', id:a.id}) }}> + </button> &nbsp;
                <button onClick={()=>{ props.dispatch({type: 'stockCntMinus', id:a.id}) }}> - </button>
            </td>
          </tr>
          )
        })  }
      </Table>
      {
          props.alertCheck == true?(
                <div className="alert_SM">
                    <p>알림알림알림알림알림알림알림알림알림알림알림알림</p>
                    <button onClick={()=>{ props.dispatch({type:'alertCancel'}) }}>닫기</button>
                </div>
          ):null
      }
      
    </div>
  )
}

function storeToProps(store){
    console.log(store);
    return {
        data : store.reducer,
        alertCheck : store.alertReducer
    }
}

export default connect(storeToProps)(Basket);