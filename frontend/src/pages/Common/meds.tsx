import React from "react";
import { cartitems } from "../e-pharma/pharma";

const Orders = () => {
    const count = cartitems.length;

    return (
        count > 0 ? (
            <ul className="list-inline">
                {cartitems.map((medicine) => (
                    <li key={medicine.name} className="list-inline-item d-flex justify-content-between">
                        <span>{medicine.name} - {medicine.dosage}</span>
                    </li>
                ))}
            </ul>
        ) : (
            <p>No items in cart</p>
        )
    );
};

export default Orders;