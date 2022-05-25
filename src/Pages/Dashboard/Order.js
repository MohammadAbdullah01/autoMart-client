import React from 'react';
import { useNavigate } from 'react-router-dom';

const Order = ({ order, index, setProduct }) => {
    const { img, quantity, product, totalPrice, paid, _id: id } = order
    const navigate = useNavigate()
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
                            <button onClick={() => navigate(`/payment/${id}`)} className='btn btn-sm'>pay</button>
                        </>
                        :
                        <p>successfully paid</p>
                }
            </td>
        </tr>
    );
};

export default Order;