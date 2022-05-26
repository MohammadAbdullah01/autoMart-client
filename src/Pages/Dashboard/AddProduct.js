import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const title = e.target.title.value;
        const desc = e.target.desc.value;
        const img = e.target.img.value;
        const minOrderQuantity = e.target.minOrderQuantity.value;
        const available = e.target.available.value;
        const price = e.target.price.value;

        const newProduct = {
            title: title,
            desc: desc,
            img: img,
            minOrderQuantity: minOrderQuantity,
            available: available,
            price: price
        }
        console.log(newProduct);
        fetch('https://lit-reaches-35676.herokuapp.com/parts', {
            method: "post",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                e.target.reset()
                toast.success("Product Added")
            })
    }
    return (
        <div>
            <h1 className='text-2xl font-bold mb-2 text-rose-400'>Add a new product</h1>
            <div className='mb-5'>
                <div className='mx-auto  w-4/5 lg:w-1/2 mt-8'>
                    <h1 className='font-bold text-center text-3xl mt-3 '>Add A Product</h1>
                    <div class="card mx-auto mt-3 p-2 bg-base-100 shadow-xl">
                        <form onSubmit={handleSubmit}>
                            <div class="form-control mx-auto text-left w-full max-w-xs">
                                <label htmlFor="title" className='my-2'>Product Name</label>
                                <input type="text" name='title' id='title' class="input input-bordered w-full max-w-xs" required />
                            </div>
                            <div class="form-control mx-auto text-left w-full max-w-xs">
                                <label htmlFor="desc" className='mb-2'>Description</label>
                                <input type="text" name='desc' id='desc' class="input input-bordered w-full max-w-xs" required />
                            </div>
                            <div class="form-control mx-auto text-left w-full max-w-xs">
                                <label htmlFor="price" className='my-2'>Price</label>
                                <input type="number" name='price' id='price' class="input input-bordered w-full max-w-xs" required />
                            </div>
                            <div class="form-control mx-auto text-left w-full max-w-xs">
                                <label htmlFor="minOrderQuantity" className='my-2'>Minimum Order Quantity</label>
                                <input type="number" name='minOrderQuantity' id='minOrderQuantity' class="input input-bordered w-full max-w-xs" required />
                            </div>
                            <div class="form-control mx-auto text-left w-full max-w-xs">
                                <label htmlFor="available" className='my-2'>Available Pieces</label>
                                <input type="number" name='available' id='available' class="input input-bordered w-full max-w-xs" required />
                            </div>
                            <div class="form-control mx-auto text-left w-full max-w-xs">
                                <label htmlFor="img" className='my-2'>Image Link</label>
                                <input type="text" name='img' id='img' placeholder='link' class="input input-bordered w-full max-w-xs" required />
                            </div>
                            <input type="submit" value="ADD PRODUCT" className='btn btn-primary form-control mx-auto text-left w-full max-w-xs mt-3' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;