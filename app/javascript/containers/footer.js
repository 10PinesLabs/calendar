import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

export class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="container">
          <p>Con <i className="fa fa-heart"/> de .Florius</p>
        </div>
      </div>
    )
  }
}