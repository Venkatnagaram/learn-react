import React from "react";
import Card from "../../ui/card/Card";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import './NewExpense.css';
const NewExpense = () => {
    return (
        <Card className="new-expense">
            <ExpenseForm />
        </Card>
    );
}

export default NewExpense;