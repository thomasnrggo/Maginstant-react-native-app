import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppNavigation from './src/app-navigation';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppNavigation />
    );
  }
}
