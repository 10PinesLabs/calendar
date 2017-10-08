import React from 'react';
import { Component } from 'react';

export class ReservationMetadata extends Component {
  render() {
    let metadata = this.props.metadata;
    let showInfo = this.props.showDescription || false;
    if (!metadata.length === 0) { return ''; }

    let icons = metadata.map(meta => {
        return <i key={meta.icon} className={"fa fa-" + meta.icon} title={meta.description}> {showInfo && meta.description} </i>
    });

    return(
      <span>
          {icons}
      </span>
    )
  }
}