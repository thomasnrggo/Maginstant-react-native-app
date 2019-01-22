import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { RNCamera } from 'react-native-camera'
import { Icon, Button } from 'native-base'
// components
import CameraLayout from './camera'

export default class AddMedia extends Component {

  static navigationOptions = {
    header: null,
    tabBarIcon: ({tintColor}) => (
      <Icon
        type='SimpleLineIcons'
        name='plus'
        style={{ color: tintColor }}
        size={10}
      />
    )
  }

  handleCameraClick = () => {
    this.props.navigation.navigate('Camera');
  }

  render() {
    return (
      <SafeAreaView>
        <Text>I'm the add media component</Text>
        <Button
          onPress={this.handleCameraClick}
        >
          <Text>Take Picture</Text>
        </Button>
      </SafeAreaView>
    );
  }
}
