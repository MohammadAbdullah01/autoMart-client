// import React, { useEffect, useState } from 'react';

// const useToken = (user) => {
//     const [token, setToken] = useState("")
//     const email = user?.user?.email;
//     console.log(email);
//     useEffect(() => {
//         fetch(`https://lit-reaches-35676.herokuapp.com/users/${email}`, {
//             method: "put",
//             headers: {
//                 'content-type': "application/json"
//             },
//             body: JSON.stringify({ email: email })
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
//             })
//     }, [email])
//     return [token]
// };

// export default useToken;

import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('')
    const email = user?.user?.email;
    const currentUser = { email: email }
    useEffect(() => {
        if (email) {
            fetch(`https://lit-reaches-35676.herokuapp.com/users/${email}`, {
                method: "put",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    setToken(data.accessToken)
                    console.log(data);
                    localStorage.setItem("accessToken", data.accessToken)
                })
        }
    }, [user, email])
    return [token]
}

export default useToken;