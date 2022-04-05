import './App.css';
import Expenses from './components/Expenses';

function App() {
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
    <div>
      <h2> The Expense Chart</h2>
      <Expenses
        title={items[0].title}
        amount={items[0].amount}
        date={items[0].date} />
      <Expenses
        title={items[1].title}
        amount={items[1].amount}
        date={items[1].date} />
      <Expenses
        title={items[2].title}
        amount={items[2].amount}
        date={items[2].date} />
      <Expenses
        title={items[3].title}
        amount={items[3].amount}
        date={items[3].date} />
    </div>
  );
}

export default App;
