import React from 'react';
import auth from '../Firebase/firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from)
    }
    return (
        <div>
            <button className='btn btn-primary' onClick={() => signInWithGoogle()}>sign in with google</button>
            <button className='btn btn-primary' onClick={() => navigate("/signup")}>signup</button>
        </div>
    );
};

export default SignIn;