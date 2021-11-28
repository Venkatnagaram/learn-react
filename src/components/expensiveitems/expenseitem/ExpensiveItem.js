import React, {useState} from 'react';
import ExpanseDate from '../date/ExpenseDate';
import Card from '../../ui/card/Card';
import './ExpensiveItems.css';
const ExpensiveItem = (props) => {
    const [title, setTitle] = useState(props.title);
    const changeTitleHandler = () => {
        setTitle('Updated Title');
    }
    return (
        <Card className="expense-item">
            <ExpanseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>                    
                <div className="expense-item__price">${props.amount}</div>
                <button onClick={changeTitleHandler}>Change Title</button>
            </div>
        </Card>
    );
}
export default ExpensiveItem;