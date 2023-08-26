import { Component } from 'react';
import Products from './components/products/products';
import Cart from './components/cart/cart';
import data from './app/data/shoes.json';
class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            cartItems: [], // Mảng lưu trữ các sản phẩm trong giỏ hàng,
            totalPrice:0
        };
    }

    addToCart = (productData) => {
        const { price } = productData; 
        const newTotalPrice = this.state.totalPrice + price;
    
        this.setState(prevState => ({
            cartItems: [...prevState.cartItems, productData], 
            totalPrice: parseFloat(newTotalPrice.toFixed(2)) 
        }));
    };
  
    updateQuantity = (productId, newQuantity) => {
        const quantityOld = this.findProductQuantityById(productId);
        if (quantityOld === null) return;
    
        if (newQuantity === 0) {
            this.removeFromCart(productId);
            return;
        }
    
        const price = this.findPriceByProductId(productId);
        const totalPrice = this.state.totalPrice + (quantityOld < newQuantity ? price : -price);
    
        this.setState(prevState => ({
            totalPrice: parseFloat(totalPrice.toFixed(2)),
            cartItems: prevState.cartItems.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        }));
    };
  

    removeFromCart = (productId) => {
        const quantityOld = this.findProductQuantityById(productId);
        if (quantityOld === null) return;
    
        const price = this.findPriceByProductId(productId);
        const totalRemovedPrice = quantityOld * price; // Tính giá tổng của sản phẩm bị xóa
    
        const newTotalPrice = parseFloat((this.state.totalPrice - totalRemovedPrice).toFixed(2)); // Cập nhật tổng giá
    
        this.setState(prevState => ({
            cartItems: prevState.cartItems.filter(item => item.id !== productId),
            totalPrice: newTotalPrice,
        }));
    };
  

    findPriceByProductId = (productId) =>  {
        const product = this.state.cartItems.find(item => item.id === productId);
        return product ? product.price : 0;
    }
    
    findProductQuantityById = (productId) => {
        const product = this.state.cartItems.find(item => item.id === productId);
        return product ? product.quantity : null;
    }

  render() {
    return (
    <div className="App">
         <div className="group-card">
            <Products 
              productsData={data.shoes} 
              addToCart={this.addToCart}
            />
            <Cart 
              cartItems={this.state.cartItems}
              totalPrice={this.state.totalPrice}
              updateQuantity={this.updateQuantity}
              removeFromCart={this.removeFromCart}
            />
       </div>
    </div>
    );
  };
}

export default App;
