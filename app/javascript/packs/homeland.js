const $ = require('jquery');
global.$ = $;
global.jQuery = $;
require('jquery-ujs');

import 'whatwg-fetch';
const QueryString = require('query-string');
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {
  App,
  Home,
  User,
  Reserve,
  Calendar,
  TopicDetail,
  ReservationList,
  NewReserve,
  UserReservationList,
  UserReplies,
  UserFollowers,
  UserFollowing,
} from 'containers';

window.Homeland = {
  fetch(path, data, opts) {
    return Homeland.request('GET', path, data, opts);
  },

  request(method, path, data, opts) {
    let url = path;
    let headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    // default option
    const fetchOpts = { method: method, headers: headers };

    // params
    if (method === 'GET' || method === 'HEAD') {
      let queryString = QueryString.stringify(data);
      url = url + '?' + queryString;
    } else {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      fetchOpts.body = formData;
    }

    return fetch(url, fetchOpts).then((res) => {
      return res.json();
    });
  },
};

const routes =
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="calendario" component={Calendar}>
          <Route path="nuevo" component={NewReserve}/>
        </Route>
        <Route path="reserva" component={ReservationList}/>
        <Route path="reserva/:id" component={Reserve}/>
      </Route>
    </Router>;

document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(routes, document.getElementById('root'))
});