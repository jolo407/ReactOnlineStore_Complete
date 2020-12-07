import React, { Component } from "react";
import Product from "../Product/Product";
import ProductService from "../../services/productService";

import "./Catalog.css";

class Catalog extends Component {
  state = {
    products: [],
    categories: [],
    selectedCategory: "",
  };
  render() {
    var prodsToDisplay = this.state.products;

    //filter if there is a selected category
    if (this.state.selectedCategory !== "") {
      prodsToDisplay = prodsToDisplay.filter(
        (p) => p.category === this.state.selectedCategory
      );
    }

    return (
      <div className="catalog-page">
        <div className="categories">
          <div className="btn-category" onClick={() => this.setCategory("")}>
            {" "}
            All Products
          </div>

          {this.state.categories.map((cat) => (
            <div
              key={cat}
              className="btn-category"
              onClick={() => this.setCategory(cat)}
            >
              {" "}
              {cat}
            </div>
          ))}
        </div>

        <div className="products">
          {prodsToDisplay.map((p) => (
            <Product key={p.id} data={p}></Product>
          ))}
        </div>
      </div>
    );
  }

  setCategory = (cat) => {
    this.setState({ selectedCategory: cat });
  };

  //component was rendered
  //lets call the service to get data
  componentDidMount() {
    let service = new ProductService();
    const data = service.getProducts();

    // identify unique categories
    let categories = [];

    for (let i = 0; i < data.length; i++) {
      var product = data[i];

      if (!categories.includes(product.category)) {
        categories.push(product.category);
      }
    }

    this.setState({ products: data, categories: categories });
  }
}

export default Catalog;
