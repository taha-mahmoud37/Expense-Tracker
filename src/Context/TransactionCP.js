import { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

// initial state

const initialState = {
    transaction: [
        {id: 1, text: 'Salary', amount: 800}
    ]
}


export const transactionContext = createContext(initialState);


const TransactionCP =({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id) {
        dispatch({
            type: 'deleteTrans',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'addTrans',
            payload: transaction
        })
    }

    return (<transactionContext.Provider value={{
        transaction: state.transaction,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </transactionContext.Provider>);
}


export default TransactionCP;