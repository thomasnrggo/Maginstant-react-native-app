import React from 'react';
import { View, StyleSheet, Image} from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Text, Icon} from 'native-base'

const CardMessage = (props) => (
  <View style={styles.messageContainer}>
    <Thumbnail
      source={{ uri: props.profileImage }}
    />
    <View style={styles.messageInfo}>
      <Text style={styles.messageText}>{props.username}</Text>
      <Text style={styles.messageText} note>{props.lastMessage}</Text>
    </View>
    <Right style={{justifyContent: 'flex-end'}}>
      <Icon
        type='SimpleLineIcons'
        name='camera'
        style={styles.icon}
      />
    </Right>
  </View>

);

export default CardMessage;

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  messageInfo: {
    paddingLeft: 10,
  },
  messageText: {
    fontSize: 14,
  },
  icon: {
    fontSize: 26,
    color: 'gray',
    marginRight: 1,
  }
});
