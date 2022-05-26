import React, { useEffect, useState } from 'react';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false)
    const email = user?.email;
    useEffect(() => {
        fetch(`http://localhost:5000/admin/${email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [email])


    return [admin]
};

export default useAdmin;