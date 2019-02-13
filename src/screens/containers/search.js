import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Icon } from 'native-base'
import Header from '../../sections/containers/searh-header'

export default class Search extends Component {

  static navigationOptions = {
    title: 'Busqueda',
    header: <Header />,
    tabBarIcon: ({tintColor, focused}) => (
      <Icon
        type='SimpleLineIcons'
        name='magnifier'
        style={{ color: tintColor}}
      />
    ),
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Search component</Text>
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
