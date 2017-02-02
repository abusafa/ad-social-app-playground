import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, Tag, Breadcrumb } from 'antd';

import ApolloClient, { createNetworkInterface } from 'apollo-client';


import { ApolloProvider } from 'react-apollo';

import logo from './logo.svg';
import './App.css';
import '../node_modules/antd/dist/antd.min.css';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


// Create the client as outlined above
const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:8080/graphql' }),
});

const Container = styled.div`
    
    padding: 15px;
    width:400px;
    margin:auto;
`;

const StyledCard = styled(Card)`
  margin-bottom:10px;

  text-align: right;
`;


const StyledBreadcrumb = styled(Breadcrumb)`
  padding: 5px;
  background-color: #f3f3f3;
  margin: 7px 0;

`;


class MyComponent extends Component {
  render() {

    const {data:{posts=[]}} = this.props
    console.log(posts);
    return (
      <Container>
        <ul>
          {posts.map((post, key)=>(
            <StyledCard key={key} title={post.title} bordered={false}>
              <StyledBreadcrumb>
                  {post.cats.map((cat, key)=> <Breadcrumb.Item key={key}>{cat}</Breadcrumb.Item>)}
              </StyledBreadcrumb>

              {post.details}
              <div>
                {post.tags.map((tag, key)=> <Tag key={key}>{tag}</Tag>)}
              </div>

            </StyledCard>
          ))}
        </ul>
      </Container>

    );
  }
}

const MyQuery = gql`query {
  posts(limit:100) {
    title
		tags
    cats
    details
  }
}`;



const MyComponentWithData = graphql(MyQuery)(MyComponent);



class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>

          <MyComponentWithData />


        </div>
      </ApolloProvider>
    );
  }
}

export default App;
