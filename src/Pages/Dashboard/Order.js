import React from 'react';

const Order = ({ order, index }) => {
    const { img, quantity, product, totalPrice } = order
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{product} pcs.</td>
            <td>{quantity} pcs.</td>
            <td>${totalPrice}</td>
            <td>
                <button className='btn btn-sm'>pay</button>
            </td>
        </tr>
    );
};

export default Order;