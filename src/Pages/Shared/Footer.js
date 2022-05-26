import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagramSquare, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation()
    return (
        < div className={`mt-10 bg-gray-600 text-white py-4 ${(location.pathname === '/signin' || location.pathname === '/signup') ? 'hidden' : 'block'}`
        }>
            <div className='flex flex-col lg:flex-row  justify-around text-center '>
                <div >
                    <h5 className='text-xl font-bold mb-2'>Send your feedback</h5>
                    <input type="text" placeholder="Your message" class="input input-bordered w-40 md:w-56" /><br />
                    <button className='btn btn-accent mt-2'>send</button>
                </div>
                <div className='mt-5 lg:mt-0'>
                    <h5 className='text-xl font-bold mb-1'>Our Head Office</h5>
                    <p ><span > 42/5 Kt Road, Malbaria</span></p>
                    <p ><span > Nehask, Sweden</span></p>
                    <p ><span > +99025841</span></p>
                </div>
                <div className='mt-5 lg:mt-0'>
                    <h5 className='text-xl font-bold mb-1'>Contact with us</h5>
                    <p className='flex justify-center align-middle'><span><FaFacebook className='text-3xl mx-1  hover:text-primary cursor-pointer my-1' /></span><span><FaLinkedin className='text-3xl mx-1  hover:text-primary cursor-pointer my-1' /></span><span><FaInstagramSquare className='text-3xl mx-1 my-1  hover:text-primary cursor-pointer' /></span></p>
                    <p className='flex justify-center align-middle'><span><FaWhatsappSquare className='text-3xl mx-1 my-1  hover:text-primary cursor-pointer' /></span><span><FaTwitterSquare className='text-3xl mx-1 my-1  hover:text-primary cursor-pointer' /></span></p>
                </div>
            </div>
        </div >
    );
};

export default Footer;