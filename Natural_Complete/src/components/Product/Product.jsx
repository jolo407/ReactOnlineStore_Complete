import React, { Component } from 'react';
import QtyPicker from '../qtyPicker/qtyPicker';
import "./Product.css"; 

class  Product extends Component {
    state = {
      quantity: 1,
    }

    // image/products/image-14.jpg
    render() {
        return ( 
           <div className="product">
               <img src={"/images/products/" + this.props.data.image} alt=""/>
                
              <h6>{this.props.data.title}</h6>
            

                <div className="total-price">
                <label className="value">${this.getTotal()}</label>
                <label className="price">${this.props.data.price.toFixed(2)}</label>
                </div>

               <div className="qty">
               <QtyPicker onValueChange={(qnty) => this.handleQuantityChange(qnty)}></QtyPicker>
                <button className="btn btn-sm btn-primary btn-add">Add</button>
                </div>



           </div>
         );
    }

    getTotal = () => {
      return (this.props.data.price * this.state.quantity).toFixed(2);
    };

    handleQuantityChange = (qnty) => {
      this.setState({quantity: qnty});
    };
}
 
export default Product;