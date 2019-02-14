import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Container, Content, Card, CardItem, Thumbnail, Body, Left, Text, Icon,} from 'native-base'
import CardMessage from '../../sections/components/card-message'

export default class Messages extends Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Mensajes',
      headerLeft: (
        <Icon
          type='SimpleLineIcons'
          name='arrow-left'
          style={styles.iconBack}
          onPress={()=> navigation.goBack()}
        />
      ),
      headerRight: (
        <Icon
          type='AntDesign'
          name='plus'
          style={styles.icon}
          onPress={()=> navigation.navigate('Home')}
        />
      ),
      tabBarVisible: false,
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      data:
      [
        {
          "id": "123",
          "username": "IamIronman",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/tonystark.png?alt=media&token=904526ca-284d-42ba-a8c8-3ac5e992021a",
          "read": true,
          "lastMessage": 'Ultimo mensaje.'
        },
        {
          "id": "1234",
          "username": "Lovehughjackman",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/deadpool.jpg?alt=media&token=e7d97a0e-3b9f-42e1-b03d-0cda73f1c22a",
          "read": true,
          "lastMessage": 'ultimo mensaje.'
        },
      ],
    }
  }

  renderMessageList = ({item}) => (
    <TouchableOpacity>
      <CardMessage
        id={item.id}
        profileImage={item.profileImage}
        username={item.username}
        lastMessage={item.lastMessage}
      />
    </TouchableOpacity>
  )

  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <Container>
        <Content>
          <View>
            <TextInput
              style={styles.buscador}
              placeholder='Buscar'
            />
          </View>
          <View>
            <FlatList
            data={this.state.data}
            keyExtractor={this._keyExtractor}
            renderItem={this.renderMessageList}
            />
          </View>
        </Content>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buscador: {
    marginTop: 10,
    marginBottom: 4,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ededed',
  },
  icon: {
    marginHorizontal: 10,
  },
  iconBack: {
    marginHorizontal: 10,
    fontSize: 24,
  }
});
