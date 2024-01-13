import './components/menu-items/MenuItem'
import './App.css'
import foodImage from '../../assets/food.png';
import hotDrinkImage from '../../assets/hot-drink.png';

type Item = {
  name: string;
  price: number;
  image: string;
}

const ITEMS: Item[] = [
  {name: 'Hamburger', price: 80, image: foodImage},
  {name: 'Cheeseburger', price: 90, image: foodImage},
  {name: 'Fries', price: 45, image: foodImage},
  {name: 'Coffee', price: 70, image: hotDrinkImage},
  {name: 'Tea', price: 50, image: hotDrinkImage},
  {name: 'Cola', price: 40, image: hotDrinkImage}
]

function App() {

  return (
    <>
    </>
  )
}

export default App
