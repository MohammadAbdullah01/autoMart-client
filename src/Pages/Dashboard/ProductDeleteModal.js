import React from 'react';
import { toast } from 'react-toastify';

const ProductDeleteModal = ({ deletingProduct, setDeletingProduct, refetch }) => {
    const { _id: id } = deletingProduct;
    const handleDelete = () => {
        console.log(id)
        fetch(`https://lit-reaches-35676.herokuapp.com/parts/${id}`, {
            method: "delete"
        })
            .then(res => res.json())
            .then(data => {
                toast.success("successfully delete the product")
                setDeletingProduct(null)
                refetch()
            })
    }

    return (
        <>
            <input type="checkbox" id="delete-product-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <label for="delete-product-modal" class="btn btn-primary btn-sm">Cancel</label>
                        <button className='btn btn-primary btn-sm' onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDeleteModal;