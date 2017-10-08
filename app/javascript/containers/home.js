import React from 'react';
import { Component } from 'react';
import { Calendar } from 'containers';

export class Home extends Component {
  render() {
    return (
      <div id="home-container">
        <Calendar />
      </div>
    )
  }
}