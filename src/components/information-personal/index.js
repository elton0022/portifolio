

import React from 'react';
import './style.css';

class Information extends React.Component {


  render() {
    return (
      <div className="information">
        <div className="circle">
          <img className="img" src={require(`../../images/${this.props.img}`)} alt="icon" />
        </div>
        <div className="information-name">
          {this.props.name}
        </div>
        <div className="information-value">
          {this.props.value}
        </div>
      </div>
    )
  }
}

export { Information }