import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const CheckoutForm = ({ order }) => {
    const [cardError, setCardError] = useState("")
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)
    const [trxId, setTrxId] = useState("")
    const stripe = useStripe();
    const elements = useElements();
    const [success, setSuccess] = useState("")
    const { _id: id, totalPrice: price, name, email } = order;
    useEffect(() => {
        fetch('https://lit-reaches-35676.herokuapp.com/create-payment-intent', {
            method: "post",
            headers: {
                'content-type': "application/json",
                'authorization': `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [price])

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
        setSuccess("")
        setProcessing(true)
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );
        const payment = {
            booking: id,
            transactionId: paymentIntent.id
        }
        if (intentError) {
            setCardError(intentError?.message)
            setSuccess("")
            setProcessing(false)
        }
        else {
            setCardError("")
            setSuccess("successfully completed payment")
            setTrxId(paymentIntent.id)
            fetch(`https://lit-reaches-35676.herokuapp.com/booking/${id}`, {
                method: "PATCH",
                headers: {
                    'content-type': "application/json",
                    'authorization': `Bearer ${localStorage.getItem("accessToken")}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success("payment successful")
                })
        }

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
            {success && <>
                <p className='text-green-500 mt-3'>{success}</p>
            </>}
            <button type="submit" className='btn btn-primary mt-3' disabled={!stripe || !clientSecret || success}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;