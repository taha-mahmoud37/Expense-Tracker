import React, {useState, useContext} from "react";
import { transactionContext } from './../Context/TransactionCP';

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const {addTransaction} = useContext(transactionContext);
   
    function sendTransData(e) {
      e.preventDefault();
      if(!text || !amount) return;
      const newTrans = {
        id: Math.floor(Math.random()*100000000),
        text,
        amount: +amount
      } 
      addTransaction(newTrans);
      setAmount(0);
      setText('')

    }

  return (
    <>
      <h3>Add Transaction</h3>
      <hr />
      <form onSubmit={sendTransData}>
        <div className="input-name input-form">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            name="text"
            value={text}
            onChange={(e)=> setText(e.target.value)}
            placeholder="Enter text..."

          />
        </div>
        <div className="input-amount input-form">
          <label>
            Amount <br />
            (Negative - expense,Positive - income)
          </label>
          <input
            type="text"
            name="amount"
            value={amount}
            onChange={(e)=> setAmount(e.target.value)}
            placeholder="0"
          />
        </div>
        <button type="submit" className="sub-btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
