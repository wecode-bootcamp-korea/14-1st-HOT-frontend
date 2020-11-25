import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.scss";

const LIST = [
  {
    id: 0,
    name: "사진",
  },
  {
    id: 1,
    name: "집들이",
  },
  {
    id: 2,
    name: "노하우",
  },
  {
    id: 3,
    name: "전문가집들이",
  },
  {
    id: 4,
    name: "셀프가이드",
  },
  {
    id: 5,
    name: "질문과답변",
  },
  {
    id: 6,
    name: "이벤트",
  },
];

class Firstcategory extends Component {
  render() {
    const { onEnter, onLeave } = this.props;

    return (
      <div
        className="firstCategory"
        onMouseEnterCommunity={() => onEnter()}
        onMouseLeaveCommunity={() => onLeave()}
      >
        {LIST.map((el) => {
          return <Link className="subNavContent">{el.name}</Link>;
        })}
      </div>
    );
  }
}

export default Firstcategory;
