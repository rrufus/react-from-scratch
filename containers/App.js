import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default class App extends Component {
    render() {
        return <Title>Yo check out this hot reloading</Title>
    }
}