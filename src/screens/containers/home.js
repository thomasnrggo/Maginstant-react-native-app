import React, { Component } from 'react';
import { Container, Content, } from 'native-base'
//components
import Card from '../../cardComponent/containers/card'

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card />  
        </Content>
      </Container>

    );
  }
}
