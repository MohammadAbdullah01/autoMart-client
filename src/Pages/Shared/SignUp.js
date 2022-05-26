import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';
import auth from '../Firebase/firebase.init';
import LoadingSpinner from './LoadingSpinner';

const SignUp = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(
        auth
    );
    const [token] = useToken(user || gUser)
    if (token) {
        navigate('/')
    }
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, nameError] = useUpdateProfile(auth);
    useEffect(() => {
        async function run() {
            await sendEmailVerification();
        }
        run()
    }, [user])
    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
    };
    let errorMessage = "";
    if (gError || error) {
        errorMessage = <p className='text-red-500'>{gError?.message.slice(22, -2) || error?.message.slice(22, -2) || nameError?.message}</p>;
    }
    if (gLoading || loading || updating || loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">Please Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs" {...register("name", {
                                    required: {
                                        value: true,
                                        message: "name is required"
                                    }
                                })} />


                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.name?.message}</span>}

                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
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
                        <input className='btn w-full' type="submit" value='Register' />
                        <p>Already have an account? <Link className='text-secondary' to='/signin'>Please Login</Link></p>
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

export default SignUp;