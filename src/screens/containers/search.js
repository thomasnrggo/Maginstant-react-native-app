import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Icon, Container, Content } from 'native-base'
import Header from '../../sections/containers/searh-header'
import Card from '../../sections/components/user-search-card'

export default class Search extends Component {

  static navigationOptions = {
    title: 'Busqueda',
    header: <Header />,
    tabBarIcon: ({tintColor, focused}) => (
      <Icon
        type='AntDesign'
        name='search1'
        style={{ color: tintColor}}
      />
    ),
  }

  constructor(props) {
    super(props)
    this.state = {
      data:
      [
        {
          "id": "1231",
          "username": "IamIronman",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/tonystark.png?alt=media&token=904526ca-284d-42ba-a8c8-3ac5e992021a",
          "description": 'Tu me conoces.'
        },
        {
          "id": "1232",
          "username": "starlord_oficial",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/starlord.jpg?alt=media&token=0bf7c2d6-1fbf-4c3d-9cf3-bbaa8bf892c5",
          "description": 'Capitan de los guardianes.'
        },
        {
          "id": "1233",
          "username": "strange_to_heaven",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/stephenstrange.jpg?alt=media&token=98982869-fc91-42ab-a7e6-1fa1e52c9951",
          "description": '14.000.605 de posibilidades.'
        },
        {
          "id": "1234",
          "username": "Ga_mori",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/gamora.png?alt=media&token=d40fa186-de44-4464-84f4-36a6fa64e290",
          "description": 'Debi ir a la derecha.'
        },
        {
          "id": "1235",
          "username": "Happyformay",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/happy.jpg?alt=media&token=0ee841c8-708c-441b-99af-fab89086a412",
          "description": 'Guardaespaldas de Iron Man.'
        },
        {
          "id": "1236",
          "username": "Lovehughjackman",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/deadpool.jpg?alt=media&token=e7d97a0e-3b9f-42e1-b03d-0cda73f1c22a",
          "description": 'Chimichangas.'
        },
      ],
    }
  }

  _keyExtractor = (item, index) => item.id;

  renderSearch = ({item}) => (
    <TouchableOpacity>
      <Card
        id={item.id}
        profileImage={item.profileImage}
        username={item.username}
        description={item.description}
      />
    </TouchableOpacity>
  )

  render() {
    return (
      <Container>
        <Content>
          <View>
            <FlatList
            data={this.state.data}
            keyExtractor={this._keyExtractor}
            renderItem={this.renderSearch}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});
