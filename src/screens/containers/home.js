import React, { Component } from 'react';
import { FlatList, } from 'react-native'
import { Container, Content, } from 'native-base'
//components
import Card from '../../cardComponent/containers/card'

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data:
      [
        {
          "id": 10,
          "username": "TitanLoco8",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/profile.jpg?alt=media&token=33d8dbd0-3424-4753-9ec5-1c6a21979ab7",
          "type": "picture",
          "picture": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/example-01.jpg?alt=media&token=9512ab93-dda2-437e-bf65-bcb27f7fd0a1",
          "liked": true,
          "likes": 100,
          "description": "Con el tiempo, sabrán lo que es perder, sentir en lo mas profundo que tienes razon y aun asi, fallar.",
          "createAt": "23 Jan 19",
        },
        {
          "id": 11,
          "username": "TitanLoco8",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/profile.jpg?alt=media&token=33d8dbd0-3424-4753-9ec5-1c6a21979ab7",
          "type": "picture",
          "picture": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/example-01.jpg?alt=media&token=9512ab93-dda2-437e-bf65-bcb27f7fd0a1",
          "liked": true,
          "likes": 100,
          "description": "Con el tiempo, sabrán lo que es perder, sentir en lo mas profundo que tienes razon y aun asi, fallar.",
          "createAt": "23 Jan 19",
        },
        {
          "id": 11,
          "username": "TitanLoco8",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/profile.jpg?alt=media&token=33d8dbd0-3424-4753-9ec5-1c6a21979ab7",
          "type": "picture",
          "picture": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/example-01.jpg?alt=media&token=9512ab93-dda2-437e-bf65-bcb27f7fd0a1",
          "liked": true,
          "likes": 100,
          "description": "Con el tiempo, sabrán lo que es perder, sentir en lo mas profundo que tienes razon y aun asi, fallar.",
          "createAt": "23 Jan 19",
        },
      ],
    }
  }

  _keyExtractor = (item, index) => item.id;

  renderCard = ({item}) => (
    <Card
      id={item.id}
      username={item.username}
      profileImage={item.profileImage}
      uploadDate={item.createAt}
      picture={item.picture}
      Liked={item.liked}
      likes={item.likes}
      description={item.description}
    />
  )

  render() {
    return (
      <Container>
        <Content>
          <FlatList
            data={this.state.data}
            keyExtractor={this._keyExtractor}
            renderItem={this.renderCard}
          />
        </Content>
      </Container>

    );
  }
}
