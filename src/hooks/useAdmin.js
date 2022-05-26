import React, { useEffect, useState } from 'react';

const useAdmin = (user) => {
    const [adminLoading, setAdminLoading] = useState(true)
    const [admin, setAdmin] = useState(false)
    const email = user?.email;
    useEffect(() => {
        fetch(`https://lit-reaches-35676.herokuapp.com/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
                setAdminLoading(false)
            })
    }, [email])


    return [admin, adminLoading]
};

export default useAdmin;