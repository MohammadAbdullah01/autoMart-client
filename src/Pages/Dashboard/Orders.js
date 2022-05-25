import React from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../Shared/LoadingSpinner';
import Order from './Order';

const Orders = () => {
    const { isLoading, data: orders, refetch } = useQuery('myOrders', () =>
        fetch('http://localhost:5000/orders').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div>
            <h1 className='text-2xl font-bold mb-2 text-rose-400'>My Orders</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {orders.map((order, index) => <Order
                            key={order._id}
                            order={order}
                            index={index}
                        ></Order>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;