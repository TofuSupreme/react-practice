import './App.css';
import Expenses from './components/Expenses';

function App() {
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
    <div>
      <h2> The Expense Chart</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
