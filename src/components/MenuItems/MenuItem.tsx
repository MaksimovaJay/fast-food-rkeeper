import React from "react";

interface Props {
  name: string;
  price: number;
  image: string;
}

const MenuItem: React.FC<Props> = props => {
  return (
    <>
      <div className="menuItem">
        <img alt="foodImage" src={props.image}/>
        <div className="menuItemContent">
          <h3>{props.name}</h3>
          <p>Price: {props.price} KGS</p>
        </div>
      </div>
    </>
  )
}

export default MenuItem