import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ product, refetch, setProduct }) => {
    const { _id: id } = product;
    const handleDelete = id => {
        fetch(`https://lit-reaches-35676.herokuapp.com/orders/${id}`, {
            method: "delete"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success("Order Deleted")
                    refetch()
                    setProduct(null)
                }
            })
    }
    return (
        <>
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are your sure you want to delete?</h3>
                    <div class="modal-action">
                        <label for="delete-modal" class="btn btn-sm">cancel</label>
                        <button onClick={() => handleDelete(id)} className='btn btn-sm mr-2'>Delete</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteModal;