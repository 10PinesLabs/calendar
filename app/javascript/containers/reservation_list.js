import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import { Reservation } from 'components'

export class ReservationList extends Component {
  constructor(props){
    super(props);
    this.state = {
      reservations: null,
      t: new Date(),
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentWillUnmount() {
    this.setState({
        reservations: [],
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props != nextProps) {
      this.props = nextProps;
      this.fetchData()
    }
  }

  fetchData() {
    let path = "/reservations.json";
    let options = { type: this.props.options };

    Homeland.fetch(path, options).then(res => {
      this.setState({
          reservations: res
      });
    });
  }

  render() {
    let list = this.loading();
    if (this.state.reservations) {
      list = this.renderReservations();
    }
    return (
      <div className="reservations" data-t={this.state.t}>
        <table className="table">
          <thead className="thead-default">
            <tr className="reservation">
              <th className="description">Evento</th>
              <th className="room">Sala</th>
              <th className="user hidden-xs-down">Quien</th>
              <th className="to hidden-md-down">Desde</th>
              <th className="from hidden-md-down">Hasta</th>
            </tr>
          </thead>
          <tbody>
          {list}
          </tbody>
        </table>
      </div>
    )
  }

  loading() {
    return (
      <tr className="reservation reservation-loading">
        <td colSpan="4" className="text-center">
          <div>Buscando reservas...</div>
        </td>
      </tr>
    )
  }

  renderReservations() {
    if (this.state.reservations.length === 0) {
      return (
        <tr className="reservation reservation-empty">
          <td colSpan="4" className="text-center">
            <div>No habría reservas</div>
          </td>
        </tr>
      )
    }

    return this.state.reservations.map(reservation => {
      return <Reservation key={`topic-item-${reservation.id}`} reservation={reservation} />
    })
  }
}

export class UserReservationList extends Component {
    constructor(props) {
        super(props);
        this.state = { user: this.props.params.user };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.params !== nextProps.params) {
            this.setState({ user: nextProps.params.user });
        }
    }

    render() {
        return (
            <ReservationList type="user" user={this.state.user} />
        )
    }
}