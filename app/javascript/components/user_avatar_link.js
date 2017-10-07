import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

export class UserAvatarLink extends Component {
  render() {
    let avatar_url = this.props.user.avatar;
    let size = this.props.size || 'lg';
    let className = this.props.className || '';
    return (
      <Link to={'/' + this.props.user.login} className={`user-avatar ${className}`}>
        <img className={`avatar avatar-${size} media-object`} src={avatar_url} />
      </Link>
    )
  }
}