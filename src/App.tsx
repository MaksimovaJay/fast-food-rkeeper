import './App.css'
import MenuList from "./components/MenuList/MenuList";
import OrderDetails from "./components/OrderDetails/OrderDetails";
import React, {useState} from 'react';

let totalPrice: number = 0;

interface OrderItemType {
  name: string;
  count: number;
  price: number;
}

const App: React.FC = () => {
  const recalculateTotalPrice = (orderItemsCopy: OrderItemType[]) => {
    totalPrice = 0;

    for (let i: number = 0; i < orderItemsCopy.length; i++) {
      console.log(orderItemsCopy[i])
      console.log(`${orderItemsCopy[i].count} + ${orderItemsCopy[i].price}`);
      totalPrice = totalPrice + orderItemsCopy[i].count * orderItemsCopy[i].price;
    }
  }

  const increaseOrderCount = (itemId: string) => {
    const orderItemsCopy = [...orderItems];

    for (let i:number = 0; i < orderItemsCopy.length; i++) {
      const itemCopy = {...orderItemsCopy[i]};
      if (itemId === orderItemsCopy[i].name) {
        itemCopy.count += 1;
        orderItemsCopy[i] = itemCopy;
        setOrderItems(orderItemsCopy);
      }
    }

    recalculateTotalPrice(orderItemsCopy);
  }

  const DecreaseOrderCount = (itemId: string) => {
    const orderItemsCopy = [...orderItems];

    for (let i:number = 0; i < orderItemsCopy.length; i++) {
      const itemCopy = {...orderItemsCopy[i]};
      if (itemId === orderItemsCopy[i].name) {
        itemCopy.count = 0;
        orderItemsCopy[i] = itemCopy;
        setOrderItems(orderItemsCopy);
      }
    }

    recalculateTotalPrice(orderItemsCopy);
  }

  const [orderItems, setOrderItems] = useState<OrderItemType[]>([
    { name: 'Hamburger', count: 0, price: 80 },
    { name: 'CheeseBurger', count: 0, price: 90 },
    { name: 'Fries', count: 0, price: 45 },
    { name: 'Coffee', count: 0, price: 70 },
    { name: 'Tea', count: 0, price: 50 },
    { name: 'Cola', count: 0, price: 40 }
  ]);

  return (
    <>
      <div className="wrapper">
        <OrderDetails totalPrice={totalPrice} orderItems={[orderItems, setOrderItems]} onRemoveButtonClick={DecreaseOrderCount} />
        <MenuList onMenuItemClick={increaseOrderCount} />
      </div>
    </>
  )
}

export default App
