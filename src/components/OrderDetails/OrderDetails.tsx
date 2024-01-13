import React from "react";
import OrderItem from "../OrderItem/OrderItem";

interface Props {
  totalPrice: number;
  orderItems: [OrderItemType[], React.Dispatch<React.SetStateAction<OrderItemType[]>>];
  onRemoveButtonClick: (itemId: string) => void;
}

const OrderDetails: React.FC<Props> = props => {
const [orderItems] = props.orderItems;
  return (
    <>
      <div className="orderDetails">
        {orderItems.map((item, index) => (
          <OrderItem key={index} name={item.name} count={item.count} price={item.price} onRemoveButtonClick={() => props.onRemoveButtonClick(item.name)}/>
        ))}

        <p>Total price: {props.totalPrice} KGS</p>
      </div>
    </>
  )
}

export default OrderDetails;