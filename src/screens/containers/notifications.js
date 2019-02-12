import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { Icon } from 'native-base'

export default class Notifications extends Component {

  static navigationOptions = {
    title: 'Notificaciones',
    headerLeft: null,
    headerBackTitle: null,
    tabBarIcon: ({tintColor, focused}) => (
      <Icon
        type='SimpleLineIcons'
        name='bell'
        style={{ color: tintColor}}
      />
    ),
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Notifications component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
