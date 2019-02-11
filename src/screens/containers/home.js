import React, { Component } from 'react';
import { FlatList, } from 'react-native'
import { Container, Content, Icon } from 'native-base'
//components
import Card from '../../cardComponent/containers/card'

import API from '../../../api.json'

export default class Home extends Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Magistant',
      headerBackTitle: null,
      headerLeft:
      (
        <Icon
        type='SimpleLineIcons'
        name='camera'
        style={{marginLeft: 10, fontSize: 26}}
        onPress={()=> navigation.navigate('Camera')}
        />
      ),
      headerRight:
      (
        <Icon
        type='SimpleLineIcons'
        name='paper-plane'
        style={{marginRight: 10, fontSize: 26}}
        onPress={()=> navigation.navigate('Messages')}
        />
      ),
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      data:
      [
        {
          "id": "10",
          "username": "TitanLoco8",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/profile.jpg?alt=media&token=33d8dbd0-3424-4753-9ec5-1c6a21979ab7",
          "type": "picture",
          "picture": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/example-01.jpg?alt=media&token=9512ab93-dda2-437e-bf65-bcb27f7fd0a1",
          "liked": true,
          "likes": 12332,
          "description": "Con el tiempo, sabrán lo que es perder, sentir en lo mas profundo que tienes razon y aun asi, fallar.",
          "createAt": "23 Jan 19",
          "comments": [
            {
              "commetId": "321",
              "username": "Gamo_ri",
              "commet": "JAJAJA mori!",
              "createAt": "Feb 10 2019",
            },
            {
              "commetId": "321",
              "username": "Gamo_ri",
              "commet": "JAJAJA mori!",
              "createAt": "Feb 10 2019",
            },
          ]
        },
        {
          "id": "11",
          "username": "TitanLoco8",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/profile.jpg?alt=media&token=33d8dbd0-3424-4753-9ec5-1c6a21979ab7",
          "type": "picture",
          "picture": "https://images.pexels.com/photos/50582/selfie-monkey-self-portrait-macaca-nigra-50582.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          "liked": true,
          "likes": 12832,
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat condimentum purus, ac malesuada massa gravida ut. Sed ut tempor felis, sed tincidunt nulla.",
          "createAt": "23 Jan 19",
        },
        {
          "id": "12",
          "username": "TitanLoco8",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/profile.jpg?alt=media&token=33d8dbd0-3424-4753-9ec5-1c6a21979ab7",
          "type": "picture",
          "picture": "https://images.pexels.com/photos/39586/gorilla-silverback-monkey-silvery-grey-39586.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          "liked": true,
          "likes": 12312,
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat condimentum purus, ac malesuada massa gravida ut. Sed ut tempor felis, sed tincidunt nulla.",
          "createAt": "23 Jan 19",
        },
        {
          "id": "13",
          "username": "TitanLoco8",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/profile.jpg?alt=media&token=33d8dbd0-3424-4753-9ec5-1c6a21979ab7",
          "type": "picture",
          "picture": "https://images.pexels.com/photos/62289/yemen-chameleon-chamaeleo-calyptratus-chameleon-reptile-62289.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          "liked": true,
          "likes": 123,
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat condimentum purus, ac malesuada massa gravida ut. Sed ut tempor felis, sed tincidunt nulla.",
          "createAt": "23 Jan 19",
        },
        {
          "id": "14",
          "username": "TitanLoco8",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/profile.jpg?alt=media&token=33d8dbd0-3424-4753-9ec5-1c6a21979ab7",
          "type": "picture",
          "picture": "https://images.pexels.com/photos/38280/monkey-mandril-africa-baboon-38280.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          "liked": true,
          "likes": 123,
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat condimentum purus, ac malesuada massa gravida ut. Sed ut tempor felis, sed tincidunt nulla.",
          "createAt": "23 Jan 19",
        },
      ],
    }
  }

  onMessageClick = () => {

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
      likes={`${item.likes} likes`}
      description={item.description}
      comments={item.comments}
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
