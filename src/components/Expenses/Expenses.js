import React, { useState } from 'react'

import Card from '../UI/Card'
import ExpenseList from './ExpenseList'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'

const Expenses = (props) => {
    const { items } = props
    const [selectYear, setSelectYear] = useState('2021')
    const handleYearChange = (year) => {
        setSelectYear(year)
    }
    const filterItems = items.filter(({ date }) => date.getFullYear().toString() === selectYear)
    return (
        <React.Fragment>
            <Card className="expenses">
                <ExpensesFilter selectYear={selectYear} handleYearChange={handleYearChange} />
                <ExpenseList items={filterItems} />
            </Card>
        </React.Fragment>
    )
}

export default Expenses
