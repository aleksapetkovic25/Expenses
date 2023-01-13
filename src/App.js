import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Toilet Paper', amount: 85.32, date: new Date(2021, 2, 12) },
  { id: 'e2', title: 'New TV', amount: 688.43, date: new Date(2022, 11, 21) },
  { id: 'e3', title: 'Car Insurance', amount: 294.32, date: new Date(2021, 11, 25) },
  { id: 'e4', title: 'New Desk', amount: 360, date: new Date(2021, 10, 19) }
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    console.log(expense)
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, {items: expenses})
  // )

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
