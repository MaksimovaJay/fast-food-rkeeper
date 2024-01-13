import foodImage from '../../assets/food.png';
import hotDrinkImage from '../../assets/hot-drink.png';
import MenuItem from "../MenuItems/MenuItem";
import React from "react";

type Item = {
  name: string;
  price: number;
  image: string;
}

interface Props {
  onMenuItemClick: (itemId: string) => void;
}

const ITEMS: Item[] = [
  {name: 'Hamburger', price: 80, image: foodImage},
  {name: 'CheeseBurger', price: 90, image: foodImage},
  {name: 'Fries', price: 45, image: foodImage},
  {name: 'Coffee', price: 70, image: hotDrinkImage},
  {name: 'Tea', price: 50, image: hotDrinkImage},
  {name: 'Cola', price: 40, image: hotDrinkImage}
]
const MenuList: React.FC<Props> = props => {
  return (
    <>
    <div className="menuList">
      {ITEMS.map((item, index) => (
        <MenuItem key={index} name={item.name} price={item.price} image={item.image} id={item.name} onBlockClick={() => props.onMenuItemClick(item.name)}/>
      ))}
    </div>
    </>
  )
}
export default MenuList;