import ExpensiveItem from "./expanseitem/ExpensiveItem";
import Card from "../card/Card";
import './Expenses.css';
const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
function Expenses(props){
    return(
        <div className="expenses">
            <Card>
                <ExpensiveItem title={expenses[0].title} date={expenses[0].date} amount={expenses[0].amount} />
            </Card>
        </div>
    );
}

export default Expenses;