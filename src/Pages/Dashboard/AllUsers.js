import React from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../Shared/LoadingSpinner';
import UserRow from './UserRow';

const AllUsers = () => {
    const { isLoading, data: users, refetch } = useQuery('users', () =>
        fetch('https://lit-reaches-35676.herokuapp.com/users', {
            method: "get",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div>
            <h1 className='text-2xl font-bold mb-2 text-rose-400'>All Users</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((oneUser, index) => <UserRow
                            key={oneUser._id}
                            index={index}
                            oneUser={oneUser}
                            refetch={refetch}
                        ></UserRow>)}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;