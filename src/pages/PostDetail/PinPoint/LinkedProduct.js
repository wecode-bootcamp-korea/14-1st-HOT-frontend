import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./LinkedProduct.scss";

class LinkedProduct extends Component {
  goToProduct = () => {
    this.props.history.push();
  };
  render() {
    const {
      isproductHide,
      productId,
      imageURL,
      productName,
      // handleProductLeave,
    } = this.props;
    // console.log("프덕", this.props.imageURL);
    return (
      <div
        // onMouseLeave={handleProductLeave}
        className="LinkedProduct"
        onClick={this.goToProduct}
      >
        <div className={isproductHide ? "show" : "hide"}>
          <div className="productImage">
            <img className="imageURL" src={imageURL} alt="" />
          </div>
          <div className="productInfo">{productName}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(LinkedProduct);
