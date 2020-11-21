import React, { Component } from "react";
import "./Signup.scss";

class Select extends Component {
  render() {
    return (
      <select>
        <option value="선택해주세요" selected="selected">
          선택해주세요
        </option>
        <option value="naver.com">naver.com</option>
        <option value="hanmail.net">hanmail.net</option>
        <option value="daum.net">daum.net</option>
        <option value="gmail.com">gmail.com</option>
        <option value="nate.com">nate.com</option>
        <option value="hotmail.com">hotmail.com</option>
        <option value="outlook.com">outlook.com</option>
        <option value="icloud.com">icloud.com</option>
        <option value="_manual">직접입력</option>
      </select>
    );
  }
}

export default Select;
