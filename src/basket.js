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
                <button onClick={()=>{ props.dispatch({type: 'stockCntPlus'}) }}> + </button> &nbsp;
                <button onClick={()=>{ props.dispatch({type: 'stockCntMinus'}) }}> - </button>
            </td>
          </tr>
          )
        })  }
      </Table>
    </div>
  )
}

function storeToProps(store){
    return {
        data : store
    }
}

export default connect(storeToProps)(Basket);