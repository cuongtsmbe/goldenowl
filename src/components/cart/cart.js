import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import CartItem from '../cartItem/cartItem';
import './cart.css';
import nikeImage from '../../app/assets/nike.png';

class Cart extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const productList = this.props.cartItems.map((product) =>
            <CartItem       key={product.id}
                            productData={{
                                id: product.id,
                                name: product.name,
                                image: product.image,
                                price: product.price,
                                color: product.color,
                                quantity: product.quantity
                            }}
                            updateQuantity={this.props.updateQuantity}
                            removeFromCart={this.props.removeFromCart}
                            
            />
        );

        return (
                <Card 
                    hoverable
                    className='card-p'
                >
                    <div className="yellow-circle"></div>
                    <div className='title-card'>
                        <div className="icon"> <img src={nikeImage} alt="nike.png" /></div>
                        <div className="title">
                            <span className='name'>Your cart</span> 
                            <span className="total-price-cart">$ {this.props.totalPrice}</span>
                        </div>
                    </div>
                    <div className="card-i-cart">
                        {productList}
                    </div>
                    
                </Card>
        );
    }
}

Cart.propTypes = {
    cartItems: PropTypes.array.isRequired
};

export default Cart;