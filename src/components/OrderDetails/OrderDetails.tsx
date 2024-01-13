import React from "react";

interface Props {
  totalPrice: number;
}

const OrderDetails: React.FC<Props> = props => {

  return (
    <>
      <div className="orderDetails">
        <p>Total price: {props.totalPrice} KGS</p>
      </div>
    </>
  )
}

export default OrderDetails;