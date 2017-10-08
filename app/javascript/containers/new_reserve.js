import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router';
import {Reservation} from 'components'

export class NewReserve extends Component {
    constructor(props) {
        super(props);
        this.state = {
            room: null,
            from: new Date().toISOString(),
            to: new Date().toISOString(),
            description: '',
            info: '',
            meta: {}
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({[target.name]: value});
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Desde:
                    <input type="datetime-local" name="from" value={this.state.from} onChange={this.handleInputChange}/>
                </label>
                <label>
                    Hasta:
                    <input type="datetime-local" name="to" value={this.state.to} onChange={this.handleInputChange}/>
                </label>
                <label>
                    Descripción:
                    <input type="text" name="description" value={this.state.description} onChange={this.handleInputChange}/>
                </label>
                <label>
                    Más info:
                    <textarea name="info" value={this.state.info} onChange={this.handleInputChange} />
                </label>
                <label>
                    Sala:
                    <select value={this.state.room} onChange={this.handleInputChange}>
                        <option value="1">Red</option>
                        <option value="1">Blue</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <label>
                    Extras:
                    <input
                        name="meta[briefcase]"
                        type="checkbox"
                        checked={this.state.meta.briefcase}
                        onChange={this.handleInputChange} />
                </label>

                <input type="submit" value="Submit"/>
            </form>
        )
    }
}