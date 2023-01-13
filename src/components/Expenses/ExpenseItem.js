import React, { useState } from "react";

import './ExpenseItem.css';
import ExpenseData from './ExpenseDate';
import Card from '../UI/Card';
import { click } from "@testing-library/user-event/dist/click";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);


    const clickHandler = () => {
        setTitle('Update')
        console.log(title)
    }


    return (
        <Card className="expense-item">
            <ExpenseData date={props.date}></ExpenseData>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;