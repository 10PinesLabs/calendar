import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'timeago-react'

export class Timeago extends Component {
  render() {
    if (!this.props.time) { return <abbr></abbr> }
    const date = new Date(this.props.time);
    const dateString = [date.toLocaleDateString(), date.toLocaleTimeString()].join(' ');

    return (
      <TimeAgo title={dateString} datetime={date} locale='es' />
    )
  }
}