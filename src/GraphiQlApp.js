import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import '../node_modules/graphiql/dist/app.css'
import '../node_modules/graphiql/dist/codemirror.css'
import '../node_modules/graphiql/dist/doc-explorer.css'
import '../node_modules/graphiql/dist/foldgutter.css'
import '../node_modules/graphiql/dist/info.css'
import '../node_modules/graphiql/dist/jump.css'
import '../node_modules/graphiql/dist/lint.css'
import '../node_modules/graphiql/dist/loading.css'
import '../node_modules/graphiql/dist/show-hint.css'
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';


function graphQLFetcher(graphQLParams) {
  return fetch('http://localhost:8080/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}


class GraphiQlApp extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <GraphiQL fetcher={graphQLFetcher} />


      </div>
    );
  }
}

export default GraphiQlApp;
