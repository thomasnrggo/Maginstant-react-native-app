/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
// components
import LoadingUI from '../../sections/components/loading'

export default class Loading extends Component {


  componentDidMount() {
    if (!this.props.user) {
      this.props.navigation.navigate('App')
    } else {
      this.props.navigation.navigate('Login')
    }
  }

  render() {
    return (
      <LoadingUI />
    );
  }
}
