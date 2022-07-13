import React from "react";
import { useDispatch, useSelector } from 'react-redux'

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)

  function addCash(cash) {
    dispatch({ type: 'ADD_CASH', payload: cash })
  }

  function getCash(cash) {
    dispatch({ type: 'GET_CASH', payload: cash })
  }
  return (
    <div className="App">
      <div style={{ fontSize: '3rem' }}>{cash}</div>
      <div style={{ display: 'flex', margin: '100px 0 0 100px ' }}>
        <button onClick={() => addCash(Number(prompt()))} style={{ width: '100px', background: 'grey' }}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со  счета</button>
      </div>
    </div>
  );
}

export default App;
