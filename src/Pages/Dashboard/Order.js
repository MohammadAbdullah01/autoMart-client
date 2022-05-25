import React from 'react';

const Order = ({ order, index, setProduct }) => {
    const { img, quantity, product, totalPrice, paid, _id: id } = order
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{product}</td>
            <td>{quantity} pcs.</td>
            <td>${totalPrice}</td>
            <td>
                {
                    !paid ?
                        <>
                            <label onClick={() => setProduct(order)} for="delete-modal" class="btn btn-sm mr-2">Delete</label>
                            <button className='btn btn-sm'>pay</button>
                        </>
                        :
                        <p>successfully paid</p>
                }
            </td>
        </tr>
    );
};

export default Order;