import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../Shared/LoadingSpinner';
import Part from './Part';

const Parts = () => {

    const { isLoading, data: parts, refetch } = useQuery('autoParts', () =>
        fetch('https://lit-reaches-35676.herokuapp.com/parts').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    const firstSixItems = parts?.slice(0, 6)



    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {firstSixItems.map(part => <Part
                key={part._id}
                part={part}
            ></Part>)}

        </div>
    );
};

export default Parts;