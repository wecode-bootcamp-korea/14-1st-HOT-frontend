import React, { Component } from "react";
import "./LinkedProduct.scss";

class LinkedProduct extends Component {
  goToProduct = () => {
    this.props.history.push();
  };
  render() {
    const { isHide, productId, imageURL, productName } = this.props;
    return (
      <div className="LinkedProduct" onClick={this.goToProduct}>
        <div className={isHide ? "show" : "hide"}>
          <div className="productImage">
            <img className="imageURL" src={imageURL} alt="" />
          </div>
          <div className="productInfo">{productName}</div>
        </div>
      </div>
    );
  }
}

export default LinkedProduct;
