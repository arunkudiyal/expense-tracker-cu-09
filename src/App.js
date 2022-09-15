import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

function App() {
  const [transactions, setTransactions] = useState( [
    { id: 'transaction001', label: 'Salary', amount: 1200 },
    { id: 'transaction002', label: 'Books', amount: -200 },
    { id: 'transaction003', label: 'Rent', amount: -400 },
    { id: 'transaction004', label: 'Freelance', amount: 800 },
    { id: 'transaction005', label: 'Food', amount: -250 },
  ] )

  return (
    <div>
      <div className="container-fluid">
        <Header title="Expense Tracker" />
      </div>
      <div className="container">
        <Balance transactions={transactions} />
        <IncomeExpense transactions={transactions} />
        <TransactionList transactions={transactions} />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
