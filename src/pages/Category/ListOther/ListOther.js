import React, { Component } from 'react';
import './ListOther.scss';

class ListOther extends Component {
  constructor() {
    super();
    this.state = {
      renderMenu: [],
    };
  }

  componentDidMount() {
    const firstFilter = this.props.giveOther.filter(
      (menu) => menu.menu_name !== '가구'
    );
    this.setState({ renderMenu: firstFilter });
  }

  changeTitleMenu = (otherElement) => {
    const otherMenu = [...this.props.giveOther];
    const filterMenu = otherMenu.filter((menu) => menu !== otherElement);
    this.setState({ renderMenu: filterMenu });
    this.props.takeTitleMenu(otherElement);
  };

  render() {
    const { renderMenu } = this.state;
    const { changeTitleMenu } = this;
    return (
      <>
        <div className='otherListBox'>
          {renderMenu.map((otherElement, otherIndex) => (
            <div
              className='buttonBox'
              key={otherIndex}
              onClick={() => changeTitleMenu(otherElement)}>
              <div className='otherList'>
                <span>{otherElement.menu_name}</span>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default ListOther;
