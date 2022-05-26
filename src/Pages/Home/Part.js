import React from 'react';
import { useNavigate } from 'react-router-dom';


const Part = ({ part }) => {

    const navigate = useNavigate()
    const { _id: id, title, minOrderQuantity, desc, img, price, available } = part;

    return (
        <>
            <div class="card lg:card-side bg-rose-50 shadow-xl p-5">
                <figure ><img className='lg:w-[100px]' src={img} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-2xl">{title}</h2>
                    <p className='text-xl'>Price: ${price}</p>
                    <div>
                        <p >Available: {available} pcs.</p>
                        <p >Minimum Order: {minOrderQuantity} pcs.</p>
                    </div>
                    <p style={{ color: "gray" }} className='text-muted mt-3 md:mt-0'>{desc}</p>
                    <div onClick={() => navigate(`/purchase/${id}`)} class="card-actions justify-end ">
                        <button class="btn btn-primary">Purchase</button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Part;