import React from 'react';

const ProductsRow = ({ part, setDeletingProduct }) => {
    const { title, img, price, available, minOrderQuantity } = part
    return (
        <tr>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div class="font-bold">{title}</div>
                    </div>
                </div>
            </td>
            <td>
                Price: ${price}
                <br />
                <span class="badge badge-ghost badge-sm">Available: {available}pcs</span>
            </td>
            <td>
                <label onClick={() => setDeletingProduct(part)} for="delete-product-modal" class="btn modal-button btn-sm">Delete</label>
            </td>
        </tr>
    );
};

export default ProductsRow;