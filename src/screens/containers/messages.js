import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import {Container, Content, Card, CardItem, Thumbnail, Body, Left, Text} from 'native-base'
import CardMessage from '../../sections/components/card-message'

export default class Messages extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data:
      [
        {
          "id": "123",
          "username": "Bl3ssur",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/profile.jpg?alt=media&token=33d8dbd0-3424-4753-9ec5-1c6a21979ab7",
          "read": true,
          "lastMessage": 'ultimisimo mensaje'
        },
        {
          "id": "1234",
          "username": "Whismichu",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/profile.jpg?alt=media&token=33d8dbd0-3424-4753-9ec5-1c6a21979ab7",
          "read": true,
          "lastMessage": 'ultimisimo mensaje'
        },
      ],
    }
  }

  renderMessage = ({item}) => {
    <CardMessage
      id={item.id}
      profileImage={item.profileImage}
      username={item.username}
      lastMessage={item.lastMessage}
    />
  }

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
          <CardMessage
            id='111'
            profileImage='https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/profile.jpg?alt=media&token=33d8dbd0-3424-4753-9ec5-1c6a21979ab7'
            username='usuario de prueba'
            lastMessage='ola k ase'
          />
          <CardMessage
            id='111'
            profileImage='https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/profile.jpg?alt=media&token=33d8dbd0-3424-4753-9ec5-1c6a21979ab7'
            username='usuario de prueba'
            lastMessage='ola k ase'
          />
          <CardMessage
            id='111'
            profileImage='https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/profile.jpg?alt=media&token=33d8dbd0-3424-4753-9ec5-1c6a21979ab7'
            username='usuario de prueba'
            lastMessage='ola k ase'
          />
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
  }
});
