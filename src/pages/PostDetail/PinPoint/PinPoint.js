import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import LinkedProduct from "./LinkedProduct";
import { FcPlus } from "react-icons/fc";
import "./PinPoint.scss";

class PinPoint extends Component {
  constructor() {
    super();
    this.state = {
      isHide: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ isHide: true });
    // console.log(this.state.isHide);
  };
  handleMouseLeave = () => {
    this.setState({ isHide: false });
  };

  render() {
    const { productId, imageURL, productName } = this.props;
    return (
      <div className="pinWrap">
        <FcPlus
          className="circlePlus"
          onMouseEnter={this.handleMouseEnter}
          // onMouseLeave={this.handleHideInfo}
        />
        <div onMouseLeave={this.handleMouseLeave}>
          <LinkedProduct
            className="linkedProduct"
            isHide={this.state.isHide}
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
