

import React from 'react';
import './style.css';

class Service extends React.Component {


  render() {
    return (
      <div className="service">
        <div className="content-service">
          <img className="img-service" src={require(`../../images/${this.props.img}`)} alt="icon" />
          <span className="name-service">
            {this.props.name.first}
            <br/>
            {this.props.name.last}
          </span>
        </div>
      </div>
    )
  }
}

export { Service }