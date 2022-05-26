import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../Firebase/firebase.init';
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
        localStorage.removeItem("accessToken")
    }
    const location = useLocation()
    const navigate = useNavigate()
    const menuItems = <>
        <li><Link className='font-semibold' to='/'>Home</Link></li>
        <li><Link className='font-semibold' to='/portfolio'>Portfolio</Link></li>
        <li><Link className='font-semibold' to='/blogs'>Blogs</Link></li>
        {user &&
            <>
                <li><Link className='font-semibold' to='/dashboard'>Dashboard</Link></li>
                <span className='text-sm font-bold block my-2 ml-4 lg:hidden '><FaUserAlt className='inline mb-1' /> {user?.displayName}</span>
                <button onClick={logOut} className='btn btn-primary block md:hidden'>Sign Out</button>
            </>
        }
        {!user && <button className='btn btn-primary block md:hidden' onClick={() => navigate('/signin')}>Sign in</button>}
    </>
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">Auto Mart</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div class="navbar-end">
                {user ?
                    <>
                        {(location.pathname === "/dashboard" || location.pathname === "/dashboard/review" || location.pathname === "/dashboard/profile" || location.pathname === "/dashboard/users" || location.pathname === '/dashboard/addproduct' || location.pathname === "/dashboard/manageproducts" || location.pathname === "/dashboard/manageorders") &&
                            <label tabindex="1" for="my-drawer-2" class="btn btn-primary drawer-button  mr-3 lg:mr-0 block lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                        }
                        <span className='text-sm font-bold lg:mr-3 hidden lg:block'><FaUserAlt className='inline mb-1' /> {user?.displayName}</span>
                        <button onClick={logOut} className='btn btn-primary hidden md:block'>Sign Out</button>
                    </>
                    :
                    <button className='btn btn-primary hidden md:block' onClick={() => navigate('/signin')}>Sign in</button>
                }
            </div>
        </div>
    );
};

export default Navbar;