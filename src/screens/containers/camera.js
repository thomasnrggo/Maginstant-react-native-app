import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { RNCamera } from 'react-native-camera'
import { Icon } from 'native-base'

export default class Camera extends Component {
  
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>I'm the Camera component</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
