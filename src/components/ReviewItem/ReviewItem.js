import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {product, handleRemoveProduct}  = props;
    const{name,img,  price, shipping, quantity} = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img } alt="" />

            </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <p className='product-name' title={name}>{name.length> 20 ? name.slice(0, 20) +  '...': name}</p>
                    <p>Price: <span className='product-price'>${price}</span></p>
                    <p><small>Shipping:${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delet-container">
                    <button onClick={()=>{handleRemoveProduct(product)}} className='delet-button'>
                        <FontAwesomeIcon className='delet-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;