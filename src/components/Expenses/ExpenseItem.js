import ExpenseDate from "../Expenses/ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import { motion } from "framer-motion";

function ExpenseItem(props) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </motion.div>
  );
}
export default ExpenseItem;
