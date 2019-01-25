/* @flow weak */

import React from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const Loading = ({}) => (
  <View style={styles.container}>
    <ActivityIndicator />
  </View>
);

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
