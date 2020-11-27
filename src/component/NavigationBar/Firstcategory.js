import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './NavigationBar.scss';

const LIST = [
  {
    id: 0,
    name: '사진',
  },
  {
    id: 1,
    name: '집들이',
  },
  {
    id: 2,
    name: '노하우',
  },
  {
    id: 3,
    name: '전문가집들이',
  },
  {
    id: 4,
    name: '셀프가이드',
  },
  {
    id: 5,
    name: '질문과답변',
  },
  {
    id: 6,
    name: '이벤트',
  },
];

class Firstcategory extends Component {
  goToCommunity = () => {
    this.props.history.push('/feedList');
  };

  render() {
    const { onEnter, onLeave } = this.props;
    const { goToCommunity } = this;
    return (
      <div
        className='firstCategory'
        onMouseEnterCommunity={() => onEnter()}
        onMouseLeaveCommunity={() => onLeave()}>
        {LIST.map((el) => {
          return (
            <Link className='subNavContent' onClick={goToCommunity}>
              {el.name}
            </Link>
          );
        })}
      </div>
    );
  }
}

export default withRouter(Firstcategory);
