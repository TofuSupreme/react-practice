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
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date} />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date} />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date} />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date} />
    </div>
  )
}
export default Expenses;
