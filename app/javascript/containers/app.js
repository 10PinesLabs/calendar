import React from 'react';
import { Component, Link } from 'react';
import { Header, Footer } from 'containers';
import { NodeLink } from 'components';

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nodes: [],
    };
  }
  render() {
    const nodeHTML = '';
    return (
      <div id="app">
        <Header />
        <div id="main" className="main-layout">
          {nodeHTML}
          <div className="container">
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    )
  }

}