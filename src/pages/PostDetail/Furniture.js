import React, { Component } from "react";

class Furniture extends Component {
  render() {
    const { link, image } = this.props;
    return (
      <li className="furniture">
        <a href={link}>
          <div className="furnitureLink">
            <img src={image} alt="furniturePicture" />
          </div>
        </a>
      </li>
    );
  }
}

export default Furniture;
