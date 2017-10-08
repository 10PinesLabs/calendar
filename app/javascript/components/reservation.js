import React from 'react';
import { Component } from 'react';
import { UserAvatarLink, Timeago, ReservationLink } from 'components'

export class Reservation extends Component {
  render() {
    let reservation = this.props.reservation;

    return (
      <tr className="reservation" id={'reservation-' + reservation.id}>
        <td className="description">
          <ReservationLink reservation={reservation} />
        </td>
        <td className="room">
          {reservation.room.name}
        </td>
        <td className="user hidden-xs-down">
          <UserAvatarLink user={reservation.user} />
        </td>
        <td className="from hidden-md-down">
          <Timeago time={reservation.from} />
        </td>
        <td className="to hidden-md-down">
          <Timeago time={reservation.to} />
        </td>
      </tr>
    )
  }
}