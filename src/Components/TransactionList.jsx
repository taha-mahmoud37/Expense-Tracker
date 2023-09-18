import React, { useContext } from 'react'
import { transactionContext } from '../Context/TransactionCP'
import Transaction from './Transaction'

const TransactionList = () => {
  const {transaction} = useContext(transactionContext);

  return (
    <>
      <p className='his'>History</p>
      <ul>
        {
          transaction.map((item) => <Transaction item = {item} key={item.id} />)
        }
      </ul>
    </>
  )
}

export default TransactionList
