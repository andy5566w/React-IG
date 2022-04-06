import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const { handleAppEvent } = props
    const handleFormChange = (userInput) => {
        const data = {
            ...userInput,
            id: Math.random().toString(16).slice(2),
        }

        handleAppEvent(data)
    }

    return (
        <div className="new-expense">
            <ExpenseForm handleFormChange={handleFormChange} />
        </div>
    )
}

export default NewExpense
