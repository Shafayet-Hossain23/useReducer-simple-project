import React, { useContext } from 'react';
import ProductCard from '../Card/ProductCard';
import { productContext } from '../Context/ProductProvider';

const Wishlist = () => {
    const { state: { wishlist, loading, error } } = useContext(productContext)
    // console.log(data)
    let content;
    if (loading) {
        content = <p>Loading...</p>
    }
    if (error) {
        content = <p> Something went wronng</p>
    }
    if (!loading && !error && wishlist.length === 0) {
        content = <p>Nothing to show. Product list is empty</p>
    }
    if (!loading && !error && wishlist.length > 0) {
        content = wishlist.map(product => <ProductCard
            product={product}
            key={product.id}
        ></ProductCard>)
    }
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-4 my-10 mx-4'>
            {content}
        </div>
    );
};

export default Wishlist;