import ExpanseDate from '../date/ExpenseDate';
import Card from '../../ui/card/Card';
import './ExpensiveItems.css';
const ExpensiveItem = (props) => {
    return (
        <Card className="expense-item">
            <ExpanseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>                    
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    );
}
export default ExpensiveItem;