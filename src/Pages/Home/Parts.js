import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../Shared/LoadingSpinner';
import Part from './Part';

const Parts = () => {
    // const parts = [
    //     { title: "Alternator", desc: "An alternator is a type of electric generator used in modern automobiles to charge the battery and to power the electrical system when its engine is running.", img: "https://www.autozone.com/images/MEDIA_ProductCatalog/m11590001_Prod-Alternator.jpg", minOrderQuantity: "1000", available: "7500", price: "38" },

    //     { title: "A/C Compressor", desc: " It plays a significant role in pressurizing and keeping the air refrigerant circulated so that you can have an optimum operating air conditioning system.", img: "https://www.autozone.com/images/MEDIA_ProductCatalog/m11580022_Prod-AC_Compressor.jpg", minOrderQuantity: "1000", available: "10000", price: "58" },

    //     { title: "Head Light", desc: "A headlamp is a lamp attached to the front of a vehicle to illuminate the road ahead", img: "https://www.autozone.com/images/MEDIA_ProductCatalog/m13430018_Prod_Headlight_Bulb.jpg", minOrderQuantity: "1000", available: "19600", price: "20" },

    //     { title: "Battery", desc: "An automotive battery or car battery is a rechargeable battery that is used to start a motor vehicle.", img: "https://www.autozone.com/images/MEDIA_ProductCatalog/m13670005_Prod_Battery.jpg", minOrderQuantity: "1000", available: "5950", price: "60" },

    //     { title: "Oil Filter", desc: "At the most basic level, oil filters serve the purpose of preventing contaminants, such as dirt and debris, from reaching the oil in your vehicle.", img: "https://www.autozone.com/images/MEDIA_ProductCatalog/m3490263_prd-Oil-Filter.jpg", minOrderQuantity: "1000", available: "25300", price: "25" },

    //     { title: "Brake Pads", desc: "The primary function of a brake pad is to slow or stop the motion of a machine or vehicle", img: "https://www.autozone.com/images/MEDIA_ProductCatalog/m13600002_Prod_Brake_Pads.jpg", minOrderQuantity: "1000", available: "23255", price: "15" }
    // ]
    // const [parts, setParts] = useState([])
    // useEffect(() => {
    //     fetch("https://lit-reaches-35676.herokuapp.com/parts")
    //         .then(res => res.json())
    //         .then(data => setParts(data))
    // }, [])
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