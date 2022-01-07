import React from 'react';
import {Table} from 'react-bootstrap';
import {connect} from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

function Basket(props){
  // useSelector를 이용하여 redux state 가져오는 방법
  let state = useSelector((state) => state )
  let dispatch = useDispatch();
  let shoesStore = state.reducer;
  let alertCheck = state.alertReducer;

  return (
    <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        { shoesStore.map((a,i)=>{
          return (
          <tr key={i}>
            <td>{a.id}</td>
            <td>{a.name}</td>
            <td>{a.stock}</td>
            <td>
                <button onClick={()=>{ dispatch({type: 'stockCntPlus', id:a.id}) }}> + </button> &nbsp;
                <button onClick={()=>{ dispatch({type: 'stockCntMinus', id:a.id}) }}> - </button>
            </td>
          </tr>
          )
        })  }
      </Table>
      {
          alertCheck == true?(
                <div className="alert_SM">
                    <p>알림알림알림알림알림알림알림알림알림알림알림알림</p>
                    <button onClick={()=>{ dispatch({type:'alertCancel'}) }}>닫기</button>
                </div>
          ):null
      }
      
    </div>
  )
}

/*
connect로 redux의 store와 연결하는 방법
function storeToProps(store){
    return {
        data : store.reducer,
        alertCheck : store.alertReducer
    }
}

export default connect(storeToProps)(Basket);
*/
export default Basket;