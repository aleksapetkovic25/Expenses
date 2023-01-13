import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    { title: 'Toilet Paper', amount: 85.32, date: new Date(2021, 2, 12) },
    { title: 'New TV', amount: 688.43, date: new Date(2022, 3, 1) },
    { title: 'Car Insurance', amount: 294.32, date: new Date(2020, 5, 25) },
    { title: 'New Desk', amount: 360, date: new Date(2021, 9, 19) }
  ];

  const addExpenseHandler = expense => {
    console.log("In App.js")
    console.log(expense)
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
