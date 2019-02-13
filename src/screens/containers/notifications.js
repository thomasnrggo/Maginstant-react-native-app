import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
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
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text>I'm the Notifications component</Text>
        </View>
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
