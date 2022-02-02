

import React from 'react';
import './styles.css';

class Project extends React.Component {


  render() {
    return (
      <div className="project">
        <div className="logo">
          <img className="img" src={require(`../../images/svg/${this.props?.language ? this.props.language.toLowerCase() : 'css'}.svg`)} alt="icon" />
          <span className="repo-name">
            {this.props.name}
          </span>
        </div>
        <p className="repo-description">
        {this.props.description}
        </p>
      </div>
    )
  }
}

export { Project }