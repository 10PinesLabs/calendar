import React from 'react';
import { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import { UserNameLink, UserAvatarLink } from 'components';

export class Header extends Component {
  render() {
    const currentUser = window.currentUser;

    return (
      <nav id="header" className="navbar navbar-light navbar-toggleable-md fixed-top bg-faded">
        <div className="container">
          <Link to="/" className="navbar-brand"><b>Reserva</b> de salas <sup>Conundrum</sup></Link>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#main-nav-menu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="main-nav-menu">
            <ul className="nav navbar-nav main-nav mr-auto mt-2 mt-md-0">
              <li className="nav-item"><IndexLink className="nav-link" activeClassName="active" to="/calendario">Calendario</IndexLink></li>
              <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/reserva">Reservas</Link></li>
              <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/sala">Salas</Link></li>
              <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/rant">Rants</Link></li>
            </ul>

            {currentUser && (
              <ul className="nav navbar-nav my-2 my-lg-0">
                <li className="nav-item">
                  <UserAvatarLink user={currentUser} className="nav-link" size="50" />
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/signout">Deslogearse</a>
                </li>
              </ul>
            )}

            {!currentUser && (
              <ul className="nav navbar-nav my-2 my-lg-0">
                <li className="nav-item"><a className="nav-link" href="/auth/google_oauth2" title="Log in with Google">Log in</a></li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    )
  }
}