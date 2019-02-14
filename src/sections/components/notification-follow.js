import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {Button, Text,} from 'native-base'

const NotificationTypeNewFollow = (props) => (
  <Button style={styles.followBtn}>
    <Text style={styles.followBtnTxt}>Seguir</Text>
  </Button>
);

export default NotificationTypeNewFollow;

const styles = StyleSheet.create({
  followBtn: {
    height: 28,
    paddingHorizontal: 4,
    backgroundColor: '#1b93d6',
    borderRadius: 5,
  },
  followBtnTxt: {
    fontWeight: 'bold',
    fontSize: 13,
  },
});
