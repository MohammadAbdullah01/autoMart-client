import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

            <div class="drawer-content">
                {/* <div className='flex justify-start'>
                </div> */}
                <Outlet />

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link className='font-semibold' to='/dashboard'>My Orders</Link></li>
                    <li><Link className='font-semibold' to='review'>Add A Review</Link></li>
                    <li><Link className='font-semibold' to='profile'>My Profile</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;