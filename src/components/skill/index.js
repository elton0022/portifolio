

import React from 'react';
import './style.css';

class Skill extends React.Component {


  render() {
    return (
      <div className="skill">
        <img className="img-skill" src={require(`../../images/${this.props.img}`)} alt="icon" />
      </div>
    )
  }
}

export { Skill }