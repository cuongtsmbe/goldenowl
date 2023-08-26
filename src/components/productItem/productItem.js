import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './productItem.css';
import { Button } from 'antd';
import checkImage from '../../app/assets/check.png';

class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.productHeaderClasses = this.productHeaderClasses.bind(this);
        this.state = {
            hidden: false,
        };
    }

    productHeaderClasses() {
        return this.state.hidden ?
            'show-check-icon':'product-add-to-cart';
    }

    addToCartClickHandler = () => {
        const { productData, addToCart } = this.props;
        addToCart({ ...productData, quantity: 1 });

        this.setState({
            hidden: true
        });
        
    };

    render() {
        const {productData} = this.props;
        return (
            <li className="product">
                <div className="product-image" style={{ backgroundColor: productData.color }}>
                    <img src={productData.image} alt={productData.name} />
                </div>
                <div className="product-detail">
                    <span className='product-name'>{productData.name}</span>
                    <p>{productData.description}</p>
                </div>
                <div className="product-action">
                    <span className='product-price'>Price: {productData.price}</span>
                    <Button type="primary" className={`transition-button ${this.state.isTransitioning ? "is-transitioning" : ""} ${this.productHeaderClasses()}`}
                            onClick={this.addToCartClickHandler}
                    >
                      {this.state.hidden ? <img src={checkImage} alt="checked" /> : "Add to Cart"}
                    </Button>
                </div>
            </li>
        );
    }
}

ProductItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
};

export default ProductItem;