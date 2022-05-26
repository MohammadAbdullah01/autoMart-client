import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../Shared/LoadingSpinner';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L28ShCuGkqPyHEvFwHREO2ZBKCIiQhsjBssyat0Ux8MaTif1QYVOj9fkbRhqjEcMJbZviVx7t9bPPLyHC3PqcFD00ZoYkEg4O');

const Payment = () => {

    const { id } = useParams()
    const { isLoading, data: order, refetch } = useQuery('myOrder', () =>
        fetch(`https://lit-reaches-35676.herokuapp.com/order/${id}`, {
            method: "get",
            headers: {
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        }).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (


        <>
            <div className='mx-auto'>
                <div class="mx-auto card w-3/4 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h1 className='text-xl font-bold'>Confirm your payment for <span className='text-green-700'> {order?.product} </span>,{order?.quantity} pieces. Total ${order?.totalPrice} only.</h1>
                    </div>
                </div>

                <div class="mx-auto card w-3/4 mt-5 bg-base-100 shadow-xl">
                    <div class="card-body">

                        <Elements stripe={stripePromise}>
                            <CheckoutForm
                                order={order}
                            />
                        </Elements>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Payment;