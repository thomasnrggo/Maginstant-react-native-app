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
        type='AntDesign'
        name='camerao'
        style={{marginLeft: 10, fontSize: 26}}
        onPress={()=> navigation.navigate('Camera')}
        />
      ),
      headerRight:
      (
        <Icon
        type='AntDesign'
        name='inbox'
        style={{marginRight: 10, fontSize: 28}}
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
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/thanos2.jpg?alt=media&token=f6a320bb-dc4b-43ba-9a22-f8453f1ff732",
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
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/thanos2.jpg?alt=media&token=f6a320bb-dc4b-43ba-9a22-f8453f1ff732",
          "type": "picture",
          "picture": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/picture-3.jpg?alt=media&token=a8acb1c5-72c7-4e04-b9d9-c05e716f3800",
          "liked": true,
          "likes": 12832,
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat condimentum purus, ac malesuada massa gravida ut. Sed ut tempor felis, sed tincidunt nulla.",
          "createAt": "23 Jan 19",
        },
        {
          "id": "12",
          "username": "TitanLoco8",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/thanos2.jpg?alt=media&token=f6a320bb-dc4b-43ba-9a22-f8453f1ff732",
          "type": "picture",
          "picture": "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/vengadores-infinity-war-y-si-thanos-tiene-razon/138031348-1-esl-ES/Vengadores-Infinity-War-Y-si-Thanos-tiene-razon.jpg",
          "liked": true,
          "likes": 12312,
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat condimentum purus, ac malesuada massa gravida ut. Sed ut tempor felis, sed tincidunt nulla.",
          "createAt": "23 Jan 19",
        },
        {
          "id": "13",
          "username": "TitanLoco8",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/thanos2.jpg?alt=media&token=f6a320bb-dc4b-43ba-9a22-f8453f1ff732",
          "type": "picture",
          "picture": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/picture-2.jpg?alt=media&token=6be8fcba-ad31-42a9-8195-9510c4067f8e",
          "liked": true,
          "likes": 123,
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat condimentum purus, ac malesuada massa gravida ut. Sed ut tempor felis, sed tincidunt nulla.",
          "createAt": "23 Jan 19",
        },
        {
          "id": "14",
          "username": "TitanLoco8",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/thanos2.jpg?alt=media&token=f6a320bb-dc4b-43ba-9a22-f8453f1ff732",
          "type": "picture",
          "picture": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/picture-1.jpg?alt=media&token=e8bd37d3-0fcc-433b-bdd5-9c0a27a98db0",
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
