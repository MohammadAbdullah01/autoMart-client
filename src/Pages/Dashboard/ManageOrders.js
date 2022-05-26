import React from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../Shared/LoadingSpinner';
import ManageRow from './ManageRow';

const ManageOrders = () => {
    const { isLoading, data: orders, refetch } = useQuery('orders', () =>
        fetch('http://localhost:5000/orders').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    console.log(orders);

    return (
        <div>
            <h1>manage orders</h1>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Details</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => <ManageRow
                            order={order}
                            key={order._id}
                            refetch={refetch}
                        ></ManageRow>
                        )}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageOrders;