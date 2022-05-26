import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import auth from '../Firebase/firebase.init';

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

            <div class="drawer-content">
                <Outlet />

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    {!admin && <>
                        <li><Link className='font-semibold' to='/dashboard'>My Orders</Link></li>
                        <li><Link className='font-semibold' to='review'>Add A Review</Link></li>
                    </>}
                    <li><Link className='font-semibold' to='profile'>My Profile</Link></li>
                    {admin && <>
                        <li><Link className='font-semibold' to='users'>Make Admin</Link></li>
                        <li><Link className='font-semibold' to='manageorders'>Manage Orders</Link></li>
                        <li><Link className='font-semibold' to='addproduct'>Add Product</Link></li>
                        <li><Link className='font-semibold' to='manageproducts'>Manage Products</Link></li>
                    </>}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;