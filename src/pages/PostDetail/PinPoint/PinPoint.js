import React, { Component } from "react";
import { FcPlus } from "react-icons/fc";
import "./PinPoint.scss";

class PinPoint extends Component {
  constructor() {
    super();
    this.state = {
      isHide: false,
    };
  }

  handleHideInfo = () => {
    this.setState({ isHide: !this.state.isHide });
  };

  render() {
    return (
      <div
        className={this.props.isHovered ? "showInfo" : "hideInfo"}
        style={({ left: "400px" }, { top: "300px" })}
      >
        <div
          className="PinPoint"
          onMouseEnter={this.handleHideInfo}
          onMouseLeave={this.handleHideInfo}
        >
          <FcPlus className="circlePlus" />
          <div className="productInfo">
            <img
              src="https://images.unsplash.com/photo-1606163017137-888c0177b3dd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="productImage"
            />
            <div className={this.state.isHide ? "hideInformation" : "infoText"}>
              <div className="name">{/*{}*/}우리집 안방 쇼파</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PinPoint;
