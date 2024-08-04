import React from "react";

interface ItemProps {
  item: {
    name: string;
    price: number;
    dosage: string;
  };
  addtoCart: (item: ItemProps['item']) => void;
}

const Items: React.FC<ItemProps> = ({ item, addtoCart }) => {
  return (
    <div className="card mb-3 w-25 display-flex">
      <div className="card-body display-flex">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.dosage}</p>
        <p className="card-text">${item.price}</p>
        <button className="btn btn-primary" onClick={() => addtoCart(item)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Items;