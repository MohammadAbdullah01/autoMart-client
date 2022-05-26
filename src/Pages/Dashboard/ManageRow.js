import React from 'react';

const ManageRow = ({ order, refetch }) => {

    const { _id: id, product, email, name, orderedId, paid, quantity, totalPrice, status } = order;
    const handleShip = () => {
        fetch(`https://lit-reaches-35676.herokuapp.com/ship/${id}`, {
            method: "put",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({ status: "shipped" })
        })
            .then(res => res.json())
            .then(data => {
                refetch()
            })
    }
    const handleDelete = () => {
        const proceed = window.confirm('Are you sure you want to delete?')
        if (proceed) {
            fetch(`https://lit-reaches-35676.herokuapp.com/ship/${id}`, {
                method: "delete"
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                })
        }

    }
    return (
        <tr>

            <td>
                <div class="flex items-center space-x-3">

                    <div>
                        <div class="font-bold">{product}</div>
                        <div class="text-sm opacity-50">ID:{id}</div>
                    </div>
                </div>
            </td>
            <td>
                Name: {name}, Email {email}
                <br />
                <span class="badge badge-ghost badge-sm">Quantity: {quantity}, Total Price:{totalPrice}</span>
            </td>
            <td><div>

                {status === "pending" && <p className='text-rose-500 mb-2'>Pending</p>}
                {status === "shipped" && <p className='text-green-500' >Shipped</p>}
                {status === "pending" && <button onClick={handleShip} className='btn btn-primary btn-sm'>ship</button>}
                {!paid && <button onClick={handleDelete} className='btn btn-primary btn-sm'>Delete</button>}
            </div></td>
        </tr>
    );
};

export default ManageRow;