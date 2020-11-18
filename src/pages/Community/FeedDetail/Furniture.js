import React, { Component } from "react";

class Furniture extends Component {
  render() {
    return (
      <li className="furniture">
        <a href={this.props.link}>
          <div className="furnitureLink">
            <img src={this.props.image} alt="" />
          </div>
        </a>
      </li>
    );
  }
}

export default Furniture;
