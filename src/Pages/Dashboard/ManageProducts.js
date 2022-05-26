import React, { useState } from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../Shared/LoadingSpinner';
import ProductDeleteModal from './ProductDeleteModal';
import ProductsRow from './ProductsRow';

const ManageProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null)
    const { isLoading, data: parts, refetch } = useQuery('allparts', () =>
        fetch('https://lit-reaches-35676.herokuapp.com/parts').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    console.log(parts);
    return (
        <div>
            <h1 className='text-2xl font-bold mb-2 text-rose-400'>Manage Products</h1>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    <thead>
                        <tr>

                            <th>Product</th>
                            <th>Details</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parts.map(part => <ProductsRow
                            setDeletingProduct={setDeletingProduct}
                            key={part._id}
                            part={part}
                        ></ProductsRow>)}
                    </tbody>
                </table>
            </div>
            {deletingProduct && <ProductDeleteModal
                deletingProduct={deletingProduct}
                setDeletingProduct={setDeletingProduct}
                refetch={refetch}
            ></ProductDeleteModal>}
        </div>
    );
};

export default ManageProducts;