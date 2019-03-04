import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Animated,
  FlatList,
} from 'react-native'
import { Icon, Container, Content } from 'native-base'
import Notification from '../../sections/components/notification-card'


export default class Notifications extends Component {

  static navigationOptions = {
    title: 'Tus notificaciones',
    headerLeft: null,
    headerBackTitle: null,
    tabBarIcon: ({tintColor, focused}) => (
      <Icon
        type='AntDesign'
        name='notification'
        style={{ color: tintColor}}
      />
    ),
  }

  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          "id": "123",
          "username": "Ga_mori",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/gamora.png?alt=media&token=d40fa186-de44-4464-84f4-36a6fa64e290",
          "type": "NEW_COMMENT",
          "picture": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/example-01.jpg?alt=media&token=9512ab93-dda2-437e-bf65-bcb27f7fd0a1",
        },
        {
          "id": "124",
          "username": "Lovehughjackman",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/deadpool.jpg?alt=media&token=e7d97a0e-3b9f-42e1-b03d-0cda73f1c22a",
          "type": "NEW_FOLLOWER",
          "picture": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/example-01.jpg?alt=media&token=9512ab93-dda2-437e-bf65-bcb27f7fd0a1",
        },
        {
          "id": "125",
          "username": "Lovehughjackman",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/deadpool.jpg?alt=media&token=e7d97a0e-3b9f-42e1-b03d-0cda73f1c22a",
          "type": "NEW_LIKE",
          "picture": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/example-01.jpg?alt=media&token=9512ab93-dda2-437e-bf65-bcb27f7fd0a1",
        },
        {
          "id": "126",
          "username": "IamIronman",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/tonystark.png?alt=media&token=904526ca-284d-42ba-a8c8-3ac5e992021a",
          "type": "NEW_COMMENT",
          "picture": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/example-01.jpg?alt=media&token=9512ab93-dda2-437e-bf65-bcb27f7fd0a1",
        },
        {
          "id": "127",
          "username": "Happyformay",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/happy.jpg?alt=media&token=0ee841c8-708c-441b-99af-fab89086a412",
          "type": "NEW_FOLLOWER",
          "picture": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/example-01.jpg?alt=media&token=9512ab93-dda2-437e-bf65-bcb27f7fd0a1",
        },
      ]
    }
  }

  renderNotifications = ({item}) => (
    <Notification
      username={item.username}
      profileImage={item.profileImage}
      type={item.type}
      picture={item.picture}
    />
  )

  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Container>
          <Content>
            <FlatList
              data={this.state.data}
              keyExtractor={this._keyExtractor}
              renderItem={this.renderNotifications}
            />
          </Content>
        </Container>
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
});
