import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Empty = (props) => (
  <View style={styles.container}>
    <Text>{props.text}</Text>
  </View>
);

export default Empty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
