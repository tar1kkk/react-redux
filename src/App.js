import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addCustomerAction, removeCustomerAction } from './store/customerReducer'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';


function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  function addCash(cash) {
    dispatch({ type: 'ADD_CASH', payload: cash })
  }

  function getCash(cash) {
    dispatch({ type: 'GET_CASH', payload: cash })
  }

  function addCustomer(name) {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }
  function removeCustomer(customer) {
    dispatch(removeCustomerAction(customer.id))
  }
  return (
    <div className="App">
      <div style={{ fontSize: '3rem', marginLeft: '100px' }}>{cash}</div>
      <div style={{ display: 'flex', margin: '100px 0 0 100px ' }}>
        <Button variant="primary" onClick={() => addCash(Number(prompt()))}>Пополнить счет</Button>
        <Button variant="secondary" onClick={() => getCash(Number(prompt()))}>Снять со  счета</Button>
        <Button variant="success" onClick={() => addCustomer(prompt())}>Добавить клиента</Button>
      </div>
      <div>
        {customers.length > 0 ?
          <div>
            {customers.map(customer => {
              return (
                <Card>
                  <Card.Body ><div onClick={() => removeCustomer(customer)}>{customer.name}</div></Card.Body>
                </Card>
              )
            })}
          </div>
          :
          <div style={{ fontSize: '2rem', marginTop: '20px' }}>
            Клиенты отсутсвтуют!
          </div>
        }
      </div>
    </div >
  );
}

export default App;
