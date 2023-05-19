import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const saveExpenseDataHandler = (expanseDataFromForm) => {
    const expenseData = {
      ...expanseDataFromForm,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpence(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
export default NewExpense;
