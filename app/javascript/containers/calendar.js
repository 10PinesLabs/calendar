import React from 'react';
import {UserAvatarLink, Timeago, PageLoading, ReservationMetadata, Vis} from 'components'
import {ReservationList} from 'containers'
import Timeline from 'react-calendar-timeline/lib'
import {browserHistory} from "react-router";
import moment from 'moment'

export class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false,
            rooms: null,
            reservations: null,
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        Promise.all([
            Homeland.fetch("/rooms/"), Homeland.fetch("/calendar/")
        ])
            .then(resp => {
                this.setState({
                    rooms: resp[0],
                    reservations: resp[1],
                    ready: true
                });
            });
    }

    render() {
        if (!this.state.ready) {
            return <PageLoading text="Wait..."/>;
        }

        let groups = this.state.rooms.map((room) => {
            return {id: room.id, title: room.description}
        });
        let items = this.state.reservations.map((reservation) => {
            return {
                id: reservation.id,
                group: reservation.room_id,
                title: reservation.description,
                start_time: new Date(reservation.from).getTime(),
                end_time: new Date(reservation.to).getTime(),
                canMove: false,
                itemProps: {
                    onClick: () => {
                        browserHistory.push("/reserva/" + reservation.id);
                    }
                }
            }
        });
        return (
            <div className="calendar">
                <Timeline groups={groups}
                          items={items}
                          defaultTimeStart={moment().add(-12, 'hour')}
                          defaultTimeEnd={moment().add(12, 'hour')}
                          onCanvasDoubleClick={(groupId, time, e) => {
                              browserHistory.push({pathname: '/calendario/nuevo', state: {room: groupId, from: new Date(time).toISOString()}});
                          }
                          }
                />
                <hr/>
                {this.props.children}
            </div>
        )
    }
}