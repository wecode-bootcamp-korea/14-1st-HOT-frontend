import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.scss";

const STORE = [
  {
    id: 0,
    name: "카테고리",
  },
  {
    id: 1,
    name: "신혼가구",
  },
  {
    id: 2,
    name: "베스트",
  },
  {
    id: 3,
    name: "오늘의딜",
  },
  {
    id: 4,
    name: "겨울빅세일",
  },
  {
    id: 5,
    name: "크리스마스",
  },
  {
    id: 6,
    name: "기획전",
  },
];

class Secondcategory extends Component {
  render() {
    return (
      <div
        className="secondCategory"
        onMouseEnterStore={() => this.props.onEnter()}
        onMouseLeaveStore={() => this.props.onLeave()}
      >
        {STORE.map((el) => {
          return <Link className="subNavContent">{el.name}</Link>;
        })}
      </div>
    );
  }
}

export default Secondcategory;
