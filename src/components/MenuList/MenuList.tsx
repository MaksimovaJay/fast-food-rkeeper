import foodImage from '../../assets/food.png';
import hotDrinkImage from '../../assets/hot-drink.png';
import MenuItem from "../MenuItems/MenuItem";

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
function MenuList(){

  return (
    <>
    <div className="menuItems">
      <MenuItem name={ITEMS[0].name}  price={ITEMS[0].price} image={ITEMS[0].image} />
      <MenuItem name={ITEMS[1].name}  price={ITEMS[1].price} image={ITEMS[1].image} />
      <MenuItem name={ITEMS[2].name}  price={ITEMS[2].price} image={ITEMS[2].image} />
      <MenuItem name={ITEMS[3].name}  price={ITEMS[3].price} image={ITEMS[3].image} />
      <MenuItem name={ITEMS[4].name}  price={ITEMS[4].price} image={ITEMS[4].image} />
      <MenuItem name={ITEMS[5].name}  price={ITEMS[5].price} image={ITEMS[5].image} />
    </div>
    </>
  )
}
export default  MenuList;