import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ order }) => {
    const [cardError, setCardError] = useState("")
    const [clientSecret, setClientSecret] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    useEffect(() => {
        // fetch("http://localhost:5000/create-payment-intent", {
        //     method: "post",
        //     headers: {
        //         'content-type': "application/json",
        //         "authorization": `Bearer ${localStorage.getItem("accessToken")}`
        //     },
        //     body: JSON.stringify({ price: order?.price })
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data?.clientSecret) {
        //             setClientSecret(data.clientSecret)
        //         }
        //     })

        fetch('http://localhost:5000/hi')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [order?.price])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        setCardError(error?.message || '')

    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {cardError && <>
                <p className='text-red-500 mt-3'>{cardError}</p>
            </>}
            <button type="submit" className='btn btn-primary mt-3' disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;