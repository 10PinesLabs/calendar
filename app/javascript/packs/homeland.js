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
  TopicDetail,
  TopicList,
  NoReplyTopicList,
  PopularTopicList,
  RecentTopicList,
  NodeTopicList,
  UserTopicList,
  FavoriteTopicList,
  UserReplies,
  UserFollowers,
  UserFollowing,
} from 'containers';

window.Homeland = {
  fetch(path, data, opts) {
    return Homeland.request('GET', path, data, opts);
  },

  request(method, path, data, opts) {
    let url = "https://ruby-china.org/api/v3" + path;
    let headers = {};

    // OAuth 2
    if (window.currentUser) {
      headers['AUTHORIZATION'] = 'Bearer ' + window.currentUser.accessToken;
    }

    // default option
    const fetchOpts = { method: method, headers: headers };

    // params
    if (method === 'GET' || method === 'HEAD') {
      let queryString = QueryString.stringify(data);
      url = url + '?' + queryString;
    } else {
      var formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      fetchOpts.body = formData;
    }

    return fetch(url, fetchOpts).then((res) => {
      return res.json();
    });
  },

  signOut() {
    return $.ajax({
      url: "/oauth",
      method: 'delete'
    });
  }
};

// Client ID and API key from the Developer Console
var CLIENT_ID = '690359932275-th5fj4uu630t2rgm0budes1h24jvlgst.apps.googleusercontent.com';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

var authorizeButton = document.getElementById('authorize-button');
var signoutButton = document.getElementById('signout-button');

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
    gapi.client.init({
        discoveryDocs: DISCOVERY_DOCS,
        clientId: CLIENT_ID,
        scope: SCOPES
    }).then(function () {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
    });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        authorizeButton.style.display = 'none';
        signoutButton.style.display = 'block';
        listUpcomingEvents();
    } else {
        authorizeButton.style.display = 'block';
        signoutButton.style.display = 'none';
    }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
    var pre = document.getElementById('content');
    var textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
}

/**
 * Print the summary and start datetime/date of the next ten events in
 * the authorized user's calendar. If no events are found an
 * appropriate message is printed.
 */
function listUpcomingEvents() {
    gapi.client.calendar.events.list({
        'calendarId': 'primary',
        'timeMin': (new Date()).toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 10,
        'orderBy': 'startTime'
    }).then(function(response) {
        var events = response.result.items;
        appendPre('Upcoming events:');

        if (events.length > 0) {
            for (i = 0; i < events.length; i++) {
                var event = events[i];
                var when = event.start.dateTime;
                if (!when) {
                    when = event.start.date;
                }
                appendPre(event.summary + ' (' + when + ')')
            }
        } else {
            appendPre('No upcoming events found.');
        }
    });
}

var routes =
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="topics" component={TopicList} />
      <Route path="topics/no-reply" component={NoReplyTopicList} />
      <Route path="topics/popular" component={PopularTopicList} />
      <Route path="topics/recent" component={RecentTopicList} />
      <Route path="topics/node:id" component={NodeTopicList} />
      <Route path="topics/:id(/r/:reply_id)" component={TopicDetail} />
      <Route path=":id" component={User}>
        <IndexRoute component={UserTopicList} />
        <Route path="replies" component={UserReplies} />
        <Route path="favorites" component={FavoriteTopicList} />
        <Route path="followers" component={UserFollowers} />
        <Route path="following" component={UserFollowing} />
      </Route>
    </Route>
  </Router>

document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(routes, document.getElementById('root'))
});