import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import { ReservationList } from 'containers';

export class Home extends Component {
  render() {
    return (
      <div id="home-container">
        <ReservationList />
      </div>
    )
  }
}