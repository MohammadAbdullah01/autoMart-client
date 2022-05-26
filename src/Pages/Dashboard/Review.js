import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../Firebase/firebase.init';

const Review = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleSubmit = (e) => {
        e.preventDefault()
        const rating = e.target.rating4.value;
        const review = e.target.opinion.value;
        if (!rating) {
            toast.error("please rate us before submitting")
            return;
        }
        const name = user?.displayName;
        const userReview = {
            rating: rating,
            review: review,
            name: name
        }
        console.log(userReview);
        fetch(`https://lit-reaches-35676.herokuapp.com/reviews`, {
            method: "post",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success("successfully reviewed")
                e.target.reset()
            })
    }
    return (
        <div>
            <h1 className='text-2xl font-bold mb-2 text-rose-400'>Ratings and reviews</h1>
            <div class="card w-4/5 lg:3/5 bg-base-100 shadow-xl p-2 text-center mx-auto mt-5">
                <form onSubmit={handleSubmit}>
                    <h1 className='text-xl font-bold mt-3 mb-2'>Rate us</h1>
                    <div class="rating">
                        <input type="radio" value='1' name="rating4" class="mask mask-star-2 bg-green-400" />
                        <input type="radio" value='2' name="rating4" class="mask mask-star-2 bg-green-400" />
                        <input type="radio" value='3' name="rating4" class="mask mask-star-2 bg-green-400" />
                        <input type="radio" value='4' name="rating4" class="mask mask-star-2 bg-green-400" />
                        <input type="radio" value='5' name="rating4" class="mask mask-star-2 bg-green-400" />
                    </div>
                    <h1 className='text-xl font-bold mt-3 mb-2' >Your Opinion</h1>
                    <textarea name="opinion" id="opinion" className='border-2 w-full' cols="30" rows="3" required></textarea>
                    <input type="submit" className='btn btn-primary my-3' value="SUBMIT" />
                </form>
            </div>
        </div>
    );
};

export default Review;