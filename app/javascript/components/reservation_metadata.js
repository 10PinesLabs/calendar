import React from 'react';
import { Component } from 'react';

export class ReservationMetadata extends Component {
  render() {
    let metadata = this.props.metadata;
    if (!metadata.length === 0) { return ''; }

    let icons = metadata.map(meta => {
        return <i key={meta.icon} className={"fa fa-" + meta.icon} title={meta.description}/>
    });

    return(
      <span>
          {icons}
      </span>
    )
  }
}