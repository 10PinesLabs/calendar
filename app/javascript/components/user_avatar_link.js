import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

export class UserAvatarLink extends Component {
  render() {
    let user = this.props.user;
    let size = this.props.size || 'lg';
    let className = this.props.className || '';
    return (
      <Link to={'/usuario/' + user.id} className={`user-avatar ${className}`} title={user.full_name}>
        <img className={`avatar avatar-${size} media-object`} src={user.avatar} />
      </Link>
    )
  }
}