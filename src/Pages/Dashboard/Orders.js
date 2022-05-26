import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../Firebase/firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner';
import DeleteModal from './DeleteModal';
import Order from './Order';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';



const Orders = () => {
    const [product, setProduct] = useState(null)
    const navigate = useNavigate('/signin')
    const [user, loading, error] = useAuthState(auth)
    const { isLoading, data: orders, refetch } = useQuery('allorders', () =>
        fetch(`https://lit-reaches-35676.herokuapp.com/orders/${user?.email}`, {
            method: "get",
            headers: {
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        }).then(res => {
            if (res.status === 401 || res.status === 403) {
                return signOut(auth)
            }
            return res.json()
        }
        )
    )
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <>
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
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            {orders?.map((order, index) => <Order
                                key={order._id}
                                order={order}
                                index={index}
                                refetch={refetch}
                                setProduct={setProduct}
                            ></Order>)}
                        </tbody>
                    </table>
                </div>
                {product && <DeleteModal
                    product={product}
                    refetch={refetch}
                    setProduct={setProduct}
                ></DeleteModal>}
            </div>

        </>
    );
};

export default Orders;