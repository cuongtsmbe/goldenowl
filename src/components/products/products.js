import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import ProductItem from '../productItem/productItem';
import './products.css';
import nikeImage from '../../app/assets/nike.png';

class Products extends Component {

    render() {
        const productList = this.props.productsData.map((product) =>
            <ProductItem    key={product.id}
                            productData={{
                                id: product.id,
                                name: product.name,
                                image: product.image,
                                price: product.price,
                                color: product.color,
                                description:product.description
                            }}
                            addToCart={this.props.addToCart}
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
                            <span className='name'>Our Products</span>
                            <span></span>
                        </div>
                    </div>
                    <div className="card-i">
                        {productList}
                    </div>
                </Card>
                
        );
    }
}

Products.propTypes = {
    productsData: PropTypes.array.isRequired
};

export default Products;