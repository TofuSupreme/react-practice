import ExpenseItem from './ExpenseItem'
import './Expenses.css';
function Expenses(props) {
    const expenses = [
    {
      id: 'e1',
      title: 'Grocery',
      amount: '3,000',
      date: new Date(2020, 4, 20)
    },
    {
      id: 'e2',
      title: 'Rent',
      amount: '50,000',
      date: new Date(2020, 4, 21)
    },
    {
      id: 'e3',
      title: 'Baby food',
      amount: '1,000',
      date: new Date(2020, 4, 22)
    },
    {
      id: 'e4',
      title: 'Amenity',
      amount: '30,000',
      date: new Date(2020, 4, 23)
    }
    ]
  return (
    <div className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date} />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date} />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date} />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date} />
    </div>
  )
}
export default Expenses;
