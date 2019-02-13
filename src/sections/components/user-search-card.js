import React from 'react';
import { View, StyleSheet, Image} from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Text, Icon} from 'native-base'

const UserCard = (props) => (
  <View style={styles.messageContainer}>
    <Thumbnail
      source={{ uri: props.profileImage }}
    />
    <View style={styles.cardContainer}>
      <Text style={styles.username}>{props.username}</Text>
      <Text style={styles.description} note>{props.description}</Text>
    </View>
  </View>

);

export default UserCard;

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  cardContainer: {
    paddingLeft: 10,
  },
  username:{
    fontSize: 13,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 13,
  },
});
