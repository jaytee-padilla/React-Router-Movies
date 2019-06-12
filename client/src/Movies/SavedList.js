import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavLink to="/">
        <div className="saved-list">
          <h3>Saved Movies:</h3>
          {this.props.list.map(movie => (
            <span className="saved-movie">{movie.title}</span>
          ))}
          <div className="home-button">Home</div>
        </div>
      </NavLink>
    );
  }
}
