import React, { useEffect, useState } from 'react';
import auth from '../Firebase/firebase.init';
import { useSendEmailVerification, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import LoadingSpinner from './LoadingSpinner';
import useToken from '../../hooks/useToken';

const SignIn = () => {
    const location = useLocation()
    const navigate = useNavigate()

    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user || gUser)
    if (token) {
        navigate(from)
    }

    const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(
        auth
    );
    const [sendPasswordResetEmail, resetSending, restError] = useSendPasswordResetEmail(
        auth
    );
    const { register, formState: { errors }, handleSubmit, watch } = useForm();
    const [myEmail, setMyEmail] = useState('sdfd')

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)

    };

    let errorMessage = "";
    if (gError || error) {
        errorMessage = <p className='text-red-500'>{gError?.message.slice(22, -2) || error?.message.slice(22, -2)}</p>;
    }
    if (gLoading || loading || resetSending) {
        return <LoadingSpinner></LoadingSpinner>
    }
    const controlInput = watch()
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">Please Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                onChange={(e) => setMyEmail(e.target.value)}
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs" {...register("email", {
                                    required: {
                                        value: true,
                                        message: "email is required"
                                    },
                                    pattern: {
                                        value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                                        message: 'provide a valid email'
                                    }
                                })} />

                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>}

                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs" {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'must be 6 length'
                                    }
                                })} />


                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.password?.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors?.password?.message}</span>}

                            </label>
                        </div>
                        {errorMessage}
                        <input className='btn w-full' type="submit" value='Login' />
                        <p>New at Auto Mart? <Link className='text-secondary' to='/signup'>Please Signup</Link></p>
                        <p>Forgot Password? <span className='text-secondary cursor-pointer'
                            onClick={async () => {
                                await sendPasswordResetEmail(controlInput?.email);
                                alert('Sent email');
                            }}
                        >Reset</span></p>
                    </form>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline"
                        onClick={() => signInWithGoogle()}
                    >Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;