import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import { ReservationMetadata } from 'components'

export class ReservationLink extends Component {
  render() {
    let reservation = this.props.reservation;
    if (!reservation) { return ''; }

    return (
      <span>
        <Link to={'/reserva/' + reservation.id} className="reservation-link" title={reservation.description}>
          {reservation.description}
        </Link>
        <ReservationMetadata metadata={reservation.metadata} />
      </span>
    )
  }
}