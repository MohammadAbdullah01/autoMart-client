import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../Firebase/firebase.init';
import { FaArrowDown } from "react-icons/fa";

const Profile = () => {
    const [stateLoading, setStateLoading] = useState(false)
    const [user, loading, error] = useAuthState(auth);
    const [profile, setProfile] = useState({})

    useEffect(() => {
        fetch(`https://lit-reaches-35676.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [user?.email, stateLoading])

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const address = e.target.address.value;
        const education = e.target.education.value;
        const phone = e.target.phone.value;
        const linkedin = e.target.linkedin.value;

        const updateUser = {
            name: name,
            address: address,
            education: education,
            phone: phone,
            linkedin: linkedin
        }
        fetch(`https://lit-reaches-35676.herokuapp.com/updateuser/${profile.user}`, {
            method: "put",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Profile updated")
                setStateLoading(!stateLoading)
                e.target.reset()
            })
    }
    console.log(profile);
    return (
        <div>
            <h1 className='text-2xl font-bold mb-2 text-rose-400 text-center'>My Profile</h1>
            <div className='mx-auto  w-4/5 lg:w-1/2 mt-8'>
                <div class="card mx-auto mt-3 px-4 py-5 bg-base-100 shadow-xl">
                    {profile?.name && <p className='text-base md:text-xl  mb-2'><span className='text-rose-400'>Name:</span> {profile?.name}</p>}
                    <p className='text-base md:text-xl  mb-2'><span className='text-rose-400'>Email:</span> {profile?.user}</p>
                    {profile?.address && <p className='text-base md:text-xl  mb-2'><span className='text-rose-400'>Address:</span> {profile?.address}</p>}
                    {profile?.education && <p className='text-base md:text-xl  mb-2'><span className='text-rose-400'>Education:</span> {profile?.education}</p>}
                    {profile?.phone && <p className='text-base md:text-xl  mb-2'><span className='text-rose-400'>Phone:</span> {profile?.phone}</p>}
                    {profile?.linkedin && <p className='text-base md:text-xl  mb-2'><span className='text-rose-400'>Linkedin Link:</span> <a href={profile?.linkedin} className='text-sky-400'>{profile?.linkedin}</a></p>}
                </div>
            </div>
            <div className='mx-auto  w-4/5 lg:w-1/2 mt-8'>
                <h1 className='font-bold text-center text-3xl mt-3 text-rose-400 '>Update Profile</h1>
                <p className='text-center w-6 mx-auto block mt-2'> <FaArrowDown className='animate-bounce' /></p>
                <p className='text-center w-6 mx-auto block mt-2'> </p>
                <div class="card mx-auto mt-3 p-2 bg-base-100 shadow-xl">
                    <form onSubmit={handleSubmit}>
                        <div class="form-control mx-auto text-left w-full max-w-xs">
                            <label htmlFor="name" className='my-2'>Name</label>
                            <input type="text" name='name' id='name' placeholder="name" class="input input-bordered w-full max-w-xs" required />
                            <label class="label">
                            </label>
                        </div>
                        <div class="form-control mx-auto text-left w-full max-w-xs">
                            <label htmlFor="email" className='mb-2'>Email</label>
                            <input type="email" name='email' id='email' value={user?.email} disabled placeholder="email" class="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div class="form-control mx-auto text-left w-full max-w-xs">
                            <label htmlFor="address" className='my-2'>Address</label>
                            <input type="text" name='address' id='address' class="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div class="form-control mx-auto text-left w-full max-w-xs">
                            <label htmlFor="education" className='my-2'>Education</label>
                            <input type="text" name='education' id='education' class="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div class="form-control mx-auto text-left w-full max-w-xs">
                            <label htmlFor="Phone" className='my-2'>Phone</label>
                            <input type="number" name='phone' id='phone' class="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div class="form-control mx-auto text-left w-full max-w-xs">
                            <label htmlFor="linkedin" className='my-2'>Linkedin link</label>
                            <input type="text" name='linkedin' id='linkedin' class="input input-bordered w-full max-w-xs" required />
                        </div>
                        <input type="submit" value="UPDATE" className='btn btn-primary form-control mx-auto text-left w-full max-w-xs mt-3' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;