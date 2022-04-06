import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'

const NewExpense = (props) => {
    const { handleAppEvent } = props
    const [isShow, setIsShow] = useState(true)
    const handleFormChange = (userInput) => {
        const data = {
            ...userInput,
            id: Math.random().toString(16).slice(2),
        }

        handleAppEvent(data)
    }

    return (
        <div className="new-expense">
            {isShow ? (
                <button onClick={() => setIsShow(false)}>Add new expense</button>
            ) : (
                <ExpenseForm handleFormChange={handleFormChange} handleCancel={() => setIsShow(true)} />
            )}
        </div>
    )
}

export default NewExpense
