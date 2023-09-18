
import './App.css';
import AddTransaction from './Components/AddTransaction';
import Balance from './Components/Balance';
import Header from './Components/Header';
import IncomeExoense from './Components/IncomeExoense';
import TransactionList from './Components/TransactionList';
import TransactionCP from "./Context/TransactionCP";

function App() {
  return (
     <TransactionCP>
        <Header />
        <Balance />
        <IncomeExoense />
        <TransactionList />
        <AddTransaction />
     </TransactionCP>

  );
}

export default App;
