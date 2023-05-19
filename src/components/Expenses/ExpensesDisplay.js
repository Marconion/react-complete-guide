import ExpenseItem from "../Expenses/ExpenseItem";
import "./ExpensesDisplay.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";

function ExpensesDisplay(props) {
  const [year, setYear] = useState("2022");

  const getYearFunction = (getYear) => {
    setYear(getYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter year={year} getYear={getYearFunction} />
      {filteredExpenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        filteredExpenses.map((expenses) => <ExpenseItem key={expenses.id} title={expenses.title} amount={expenses.amount} date={expenses.date} />)
      )}
    </Card>
  );
}

export default ExpensesDisplay;
