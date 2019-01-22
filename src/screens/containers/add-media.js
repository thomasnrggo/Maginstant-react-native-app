import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { RNCamera } from 'react-native-camera'
import { Icon } from 'native-base'

export default class AddMedia extends Component {

  static navigationOptions = {
    title: 'Añadir',
    tabBarIcon: ({tintColor}) => (
      <Icon
        type='SimpleLineIcons'
        name='plus'
        style={{ color: tintColor }}
        size={10}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>

          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async function() {
   if (this.camera) {
     const options = { quality: 0.5, base64: true };
     const data = await this.camera.takePictureAsync(options);
     console.log(data.uri);
   }
 };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 25,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    width: 50,
    height: 50,
    margin: 20,
  },
});
