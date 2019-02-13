import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native'
import { Icon, Container, Content } from 'native-base'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Notification from '../../sections/components/notification-card'


export default class Notifications extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor, focused}) => (
      <Icon
        type='SimpleLineIcons'
        name='bell'
        style={{ color: tintColor}}
      />
    ),
  }


  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Container>
          <Content>
            <View style={styles.scene}>
              <Notification
                profileImage='https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/gamora.png?alt=media&token=d40fa186-de44-4464-84f4-36a6fa64e290'
                username='Ga_mori'
                notificationMessage='Te ha empezado a segir'
              />
            </View>
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
