import ExpensiveItem from "./expanseitem/ExpensiveItem";
import Card from "../ui/card/Card";
import './Expenses.css';
const Expenses = (props) => {
  console.log(props.items);
    return(
        <div className="expenses">
            <Card>
                <ExpensiveItem title={props.items[0].title} date={props.items[0].date} amount={props.items[0].amount} />
            </Card>
        </div>
    );
}

export default Expenses;