import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  Button,
} from 'react-native'
import { Icon } from 'native-base'

export default class NewPost extends Component {

  static navigationOptions = ({ navigation }) => {
    const { goBack } = navigation;
    return {
      headerLeft: (
        <Button
          title="Cancelar"
          onPress={() => goBack()}
        />
      ),
      headerRight: (
        <Button
          title="Publicar"
          onPress={()=> navigation.navigate('Home') }
        />
      ),
    };
  };

  render() {
    const image = this.props.navigation.getParam('image');
    return (
      <SafeAreaView>
        <View style={{flexDirection: 'row', padding: 10}}>
          <Image
            source={image}
            style={{width: 80, height: 80}}
          />
          <TextInput
            style={styles.descriptionBox}
            multiline={true}
            placeholder="Añade una description..."
          />
        </View>
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
  descriptionBox: {
    marginTop: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    textAlignVertical: 'top',
    fontSize: 15,
  },
});
