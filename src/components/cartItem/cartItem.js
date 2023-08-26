import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import trashIcon from '../../app/assets/trash.png';
import './cartItem.css';

class CartItem extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            isRemoved: false 
        };
    }

    handleUpdateQuantityIncrease = () => {
        const { productData, updateQuantity } = this.props;
        updateQuantity(productData.id,productData.quantity+1);
    };

    handleUpdateQuantityDescrease = () => {
        const { productData, updateQuantity } = this.props;
        updateQuantity(productData.id,productData.quantity-1);
    };

    handleRemoveFromCart = () => {
        const { productData, removeFromCart } = this.props;
        this.setState({ isRemoved: true });
        setTimeout(() => {
            removeFromCart(productData.id);
        }, 500);
    };

    render() {
        const { productData } = this.props;     
        return (
            <li className={`product-cart ${this.state.isRemoved ? 'removed' : ''}`}>
                <div className="left">
                    <img src={productData.image} alt={productData.name} />
                </div>
                <div className='right'>
                    <span className='product-cart-name'>{productData.name}</span>
                    <span className='product-cart-price'>Price: {productData.price}</span>
                    <div className="product-cart-action">
                        <div className='action-quantity'>
                            <Button size="small" onClick={this.handleUpdateQuantityDescrease}>-</Button>
                            <span className="quantity">{productData.quantity}</span>
                            <Button size="small" onClick={this.handleUpdateQuantityIncrease} >+</Button>
                        </div>
                        <Button size="small" onClick={this.handleRemoveFromCart} className="button-remove">
                             <img src={trashIcon} alt="Icon" />
                        </Button>

                    </div>
                </div>
            </li>
        
        );
    }
}

CartItem.propTypes = {
    productData: PropTypes.object.isRequired,
    // onRemove: PropTypes.func.isRequired,
};

export default CartItem;
