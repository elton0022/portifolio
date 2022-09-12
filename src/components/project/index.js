

import React from 'react';
import './styles.css';

class Project extends React.Component {


  openInNewTab(url) {
    window.open(url, '_blank');
  }

  render() {
    return (
      <div className="project" onClick={() => this.openInNewTab(this.props.url)}>
        <div className="container-card">
          <img className="img" src={require(`../../images/svg/${this.props?.language ? this.props.language.toLowerCase() + '.svg' : 'css.svg'}`)} alt="icon" />
          <div className="repo-content">
            <span className="repo-name">
              {this.props.name}
            </span>
            <p className="repo-description">
              {this.props.description}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export { Project }