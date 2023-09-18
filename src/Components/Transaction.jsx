import React, {useContext} from 'react'
import { transactionContext } from './../Context/TransactionCP';

const Transaction = ({item}) => {
  const { id, text, amount} = item;
  const {deleteTransaction} = useContext(transactionContext);
  let sign = amount > 0? '+': '-';


  return (
    <>
        <li className={amount > 0? 'plus': 'miuns'} id={id}>
                {text} <span>{sign}${Math.abs(amount)}</span> 
                <button className='delete-btn' onClick={() => deleteTransaction(id)}>x</button>
        </li> 
    </>
  )
}

export default Transaction
