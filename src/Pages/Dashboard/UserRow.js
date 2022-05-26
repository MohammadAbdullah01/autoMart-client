import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ oneUser, index, refetch }) => {

    const { user } = oneUser
    const handleAdmin = () => {
        fetch(`https://lit-reaches-35676.herokuapp.com/user/admin/${user}`, {
            method: "put",
            headers: {
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`,
                'content-type': "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success("successfully made admin")
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user}</td>
            <td>{oneUser?.role === "admin" || <button onClick={handleAdmin} className='btn btn-primary btn-sm'>Make Admin</button>}</td>
        </tr>
    );
};

export default UserRow;