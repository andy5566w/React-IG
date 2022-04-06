import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseForm = (props) => {
    const { handleFormChange, handleCancel } = props
    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: '',
    })

    const handleTitleChange = (event) => {
        setUserInput((previousState) => ({
            ...previousState,
            title: event.target.value,
        }))
    }

    const handleAmountChange = (event) => {
        setUserInput((previousState) => ({ ...previousState, amount: event.target.value }))
    }

    const handleDateChange = (event) => {
        setUserInput((previousState) => ({ ...previousState, date: event.target.value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const expenseData = {
            ...userInput,
            date: new Date(userInput.date),
        }
        console.log(expenseData)
        handleFormChange(expenseData)
        handleCancel()
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInput.title} onChange={handleTitleChange} />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        value={userInput.amount}
                        min="0.01"
                        step="0.01"
                        onChange={handleAmountChange}
                    />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        value={userInput.date}
                        min="2019-01-01"
                        max="2022-12-31"
                        onChange={handleDateChange}
                    />
                </div>

                <div className="new-expense__actions">
                    <button type="button" onClick={handleCancel}>
                        Cancel
                    </button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm
