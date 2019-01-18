/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
// components
import Card from '../../cardComponent/containers/card'

export default class DetailPost extends Component {
  static navigationOptions = {
    title: 'Foto',
  }
  render() {
    return (
      <Card />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
