import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppNavigation from './src/app-navigation';
import firebase from 'react-native-firebase';
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: ...']);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppNavigation />
    );
  }
}
