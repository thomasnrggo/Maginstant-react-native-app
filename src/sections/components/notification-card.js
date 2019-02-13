import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {Thumbnail, Text,} from 'native-base'

const NotificationCard = (props) => (
  <View style={styles.notificationContainer}>
    <Thumbnail
      source={{ uri: props.profileImage }}
    />
    <View style={styles.notificationBox}>
      <Text style={styles.username}>{props.username}</Text>
      <Text style={styles.notification} note>{props.notificationMessage}</Text>
    </View>
  </View>
);

export default NotificationCard;

const styles = StyleSheet.create({
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  notificationBox: {
    paddingLeft: 10,
  },
  username: {
    fontSize: 14,
  },
  notification: {
    fontSize: 14,
  },
  followBtn: {

  },
});
