import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import LinkedProduct from "./LinkedProduct";
import { FcPlus } from "react-icons/fc";
import "./PinPoint.scss";

class PinPoint extends Component {
  constructor() {
    super();
    this.state = {
      isproductHide: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ isproductHide: true });
    // console.log(this.state.isHide);
  };
  handleMouseLeave = () => {
    this.setState({ isproductHide: false });
  };

  render() {
    console.log("상품", this.state.isproductHide);
    const { productId, imageURL, productName } = this.props;
    return (
      <div
        className="pinWrap"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <FcPlus
          className="circlePlus"
          // onMouseEnter={this.handleMouseEnter}
          // onMouseLeave={this.handleHideInfo}
        />
        <div>
          <LinkedProduct
            className="linkedProduct"
            isproductHide={this.state.isproductHide}
            productId={productId}
            imageURL={imageURL}
            productName={productName}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(PinPoint);
