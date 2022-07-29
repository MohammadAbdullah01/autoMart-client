import React from 'react';
import developer from '../../Assets/developer.PNG'

const Portfolio = () => {
    return (
        <div className='card p-5 shadow-lg flex'>
            <div class="avatar ">
                <div class=" w-24 md:w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 text-center mx-auto">
                    <img src={developer} alt='' />
                </div>
            </div>
            <div className='text-center'>
                <h1 className='text-2xl font-bold mt-2 text-rose-400'>Hi! I'm Abdullah</h1>
                <h2 className='font-semibold'>Email: abdullahofficial2022@gmail.com</h2>
                <h2 className='font-semibold'>Education: BA Honours (2nd) year, Govt. Titumir College</h2>

                <hr className='my-5' />

                <h1 className='text-xl font-bold text-rose-400'>Technologies I'm expert In:</h1>
                <ul>
                    <li className='text-xl'>1. HTML</li>
                    <li className='text-xl'>2. CSS</li>
                    <li className='text-xl'>3. Bootstrap</li>
                    <li className='text-xl'>4. TailwindCSS</li>
                    <li className='text-xl'>5. Javascript</li>
                    <li className='text-xl'>6. ReactJs</li>
                    <li className='text-xl'>7. NodeJs</li>
                    <li className='text-xl'>8. ExpressJS</li>
                    <li className='text-xl'>9. MongoDB</li>
                </ul>
                <hr className='my-5' />
                <h1 className='text-rose-400 font-bold text-2xl'>My 3 best Project Link:</h1>
                <ul>
                    <li>Fridge Warehoue: <a className='text-red-600' href="#">404 Not found</a></li>
                    <li>Gym Website: <a className='text-sky-600' href="https://gymaster-78fd8.web.app/"> https://gymaster-78fd8.web.app</a></li>
                    <li>Review Website: <a className='text-sky-600' href="https://compify-review-react.netlify.app/">https://compify-review-react.netlify.app/</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Portfolio;