import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from './Card';

function Expenses(props) {
    const items = [
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
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date} />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date} />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date} />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date} />
    </Card>
  )
}
export default Expenses;
