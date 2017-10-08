import React from 'react';
import { UserAvatarLink, Timeago, PageLoading, ReservationMetadata, Vis } from 'components'
import { ReservationList } from 'containers'
import Timeline from 'react-calendar-timeline/lib'
import moment from 'moment'

export class Reserve extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      reservation: null,
    };
  }

  componentDidMount() {
    this.fetchData(this.props.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params !== nextProps.params) {
      this.fetchData(nextProps.params.id);
    }
  }

  fetchData(id) {
    Homeland.fetch("/reservations/"+ id +".json").then(res => {
      this.setState({
        reservation: res,
      });
    });
  }

  render() {
    const reservation = this.state.reservation;
    if (!reservation) { return <PageLoading text="Wait..." />; }
    let groups = [{id: 1, title: reservation.room.name}];
    let items = [
        {id: 1, group: 1, title: reservation.description, start_time: reservation.from, end_time: reservation.to}
    ];

    return (
      <div className="user-profile">
        <div className="user-info card text-center">
          <div className="card-block">
            <UserAvatarLink user={reservation.user} />
            <h4 className="card-title text-center">
                {reservation.description}
            </h4>
              {reservation.info && (
                <span className="info">({reservation.info})</span>
              )}
              <p>
                Desde: {reservation.from} a: {reservation.to}
              </p>
            <Timeline groups={groups}
                      items={items}
                      defaultTimeStart={new moment(reservation.from).add(-1, 'hour')}
                      defaultTimeEnd={new moment(reservation.to).add(1, 'hour')}
            />
          </div>
          <div className="card-footer">
            <ReservationMetadata metadata={reservation.metadata} showDescription />
          </div>
        </div>
        <div className="clearfix">
        </div>
      </div>
    )
  }
}