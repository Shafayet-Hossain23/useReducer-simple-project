import React from 'react';
import { useContext } from 'react';
import ProductProvider, { productContext } from '../Context/ProductProvider';
import { actionTypes } from '../reducerManagement/actionType';

const ProductCard = ({ product }) => {
    // console.log(product)
    const { dispatch } = useContext(productContext)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-lg shadow-yellow-500/50 h-[650px]">
                <figure><img src={product.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {product.model}
                        <div className="badge badge-secondary">{product.rating}.00</div>
                    </h2>
                    <p>{product.keyFeature}</p>
                    <p className='text-red-500 font-semibold'>{product.price} tk</p>
                    <div className="card-actions justify-end">
                        <div onClick={() => dispatch({ type: actionTypes.ADD_TO_CART, payload: product })} className="badge badge-outline cursor-pointer hover:bg-green-400">Add to Cart</div>
                        <div onClick={() => dispatch({ type: actionTypes.WISH_LIST, payload: product })} className="cursor-pointer hover:bg-pink-400 badge badge-outline">Wishlist</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;