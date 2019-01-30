import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { RNCamera } from 'react-native-camera'
import { Icon, Button } from 'native-base'

// import CameraRollPicker from 'react-native-camera-roll-picker'
import ImagePicker from 'react-native-image-picker';
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

  constructor(props) {
    super(props)
    this.state = {
      imageUpdated: '',
      imagePath: '',
      imageHeight: '',
      imageWidth: '',
    }
  }

  handleCameraClick = () => {
    this.props.navigation.navigate('Camera');
  }

  openImagePiker = () => {
    const options = {
      title: 'Seleccionar imagen',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      }
    }

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri};

        this.setState({
          imageUpdated: source,
          imagePath: response.uri,
          imageHeight: response.height,
          imageWidth: response.width
        })
      }
    })
  }

  render() {
    if (this.state.imageUpdated) {
      const selectedImage = this.state.imageUpdated
      this.props.navigation.navigate('NewPost', { image: selectedImage });
    }
    return (
      <SafeAreaView style={styles.container}>
          <Text onPress={this.handleCameraClick}>Tomar foto</Text>
          <Text onPress={this.openImagePiker}>Desde Galeria</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 12,
    backgroundColor: '#dedede',
    borderColor: '#bbbbbb',
  }
})
