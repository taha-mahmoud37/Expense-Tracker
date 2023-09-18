import React, { useContext } from 'react'
import { transactionContext } from '../Context/TransactionCP';

const Balance = () => {
  const {transaction} = useContext(transactionContext);
  const amounts = transaction.map(trans => trans.amount);
  const total = amounts.reduce((acc, item)=> acc += item, 0).toFixed(2);
  return (
    <>
      <h3>your balance</h3>
      <h4 id='balance' className='blance'>${total}</h4>
    </>
  )
}

export default Balance
