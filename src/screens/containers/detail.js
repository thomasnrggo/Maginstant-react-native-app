/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Container, Content, } from 'native-base'
// components
import Card from '../../cardComponent/containers/card'

export default class DetailPost extends Component {
  static navigationOptions = {
    title: 'Foto',
  }
  render() {
    return (
      <Container>
        <Content>
          <Card {...this.props} />
        </Content>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
