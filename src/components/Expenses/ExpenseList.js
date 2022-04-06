import './ExpenseList.css'

import ExpenseItem from './ExpenseItem'
const ExpenseList = (props) => {
    const { items } = props
    if (!items.length) {
        return <h2 className="expenses-list__fallback">There are no items here</h2>
    }
    return (
        <ul className="expenses-list">
            {items.map(({ date, title, id, amount }) => (
                <ExpenseItem amount={amount} date={date} title={title} key={id} />
            ))}
        </ul>
    )
}

export default ExpenseList
