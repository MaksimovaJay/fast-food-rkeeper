import React from "react";

interface Props {
  name: string;
  count: number;
  price: number;
  onRemoveButtonClick: () => void;
}

const OrderItem: React.FC<Props> = props => {
  return (
    <>
      <div className="orderItem">
        <p>{props.name} x{props.count} {props.count * props.price}KGS</p>
        <button id={props.name + 'Remove'} onClick={props.onRemoveButtonClick}>Удалить</button>
      </div>
    </>
  )
}

export default OrderItem;