import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
  Image,
  CameraRoll,
  StatusBar,
} from 'react-native';
import Camera from 'react-native-camera'
import { Icon } from 'native-base'

export default class CameraRoute extends Component {

  static navigationOptions = {
    header: null,
    headerTransparent: true,
    headerTintColor: '#fff',
    tabBarVisible: false,
  }

  constructor(props) {
    super(props);

    this.state = {
      path: null,
    };
  }

  takePicture = () => {
    this.camera.capture()
      .then((data) => {
        console.log(data);
        this.setState({ path: data.path })
      })
      .catch(err => console.error(err))
  }

  renderCamera = () => {
    return (
      <SafeAreaView>
        <StatusBar barStyle="light-content" />
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureTarget={Camera.constants.CaptureTarget.disk}
        />
        <TouchableHighlight
          style={styles.capture}
          onPress={this.takePicture.bind(this)}
          underlayColor="rgba(255, 255, 255, 0.5)"
        >
          <View />
        </TouchableHighlight>
        <Text
          style={styles.cancel}
          onPress={() => this.props.navigation.goBack()}
        >Regresar
        </Text>
      </SafeAreaView>
    )
  }

  renderImage = () => {
    const picture = this.state.path
    return (
      <View>
        <Image
          source={{ uri: picture }}
          style={styles.preview}
        />
        <Text
          style={styles.save}
          onPress={() => {
            CameraRoll.saveToCameraRoll(picture)
            this.props.navigation.navigate('NewPost', { image: picture });
          }}
        >Siguiente
        </Text>
        <Text
          style={styles.cancel}
          onPress={() => this.setState({ path: null })}
        >Regresar
        </Text>


      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.path ? this.renderImage() : this.renderCamera()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  capture: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 5,
    borderColor: '#FFF',
    marginBottom: 15,
    alignSelf: 'center',
  },
  cancel: {
    position: 'absolute',
    left: 20,
    top: 50,
    backgroundColor: 'transparent',
    color: '#FFF',
    fontWeight: '600',
    fontSize: 17,
  },
  save: {
    position: 'absolute',
    right: 20,
    top: 50,
    backgroundColor: 'transparent',
    color: '#FFF',
    fontWeight: '600',
    fontSize: 17,
  }
});
