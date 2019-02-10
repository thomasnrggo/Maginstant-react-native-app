import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Text} from 'native-base'

const CardMessage = (props) => (
  <Card style={styles.cardContainer}>
    <CardItem>
      <Left>
        <Thumbnail
          style={styles.thumbnail}
          source={{
            uri: props.profileImage
          }}
        />
        <Body>
          <Text>{props.username}</Text>
          <Text note>{props.lastMessage}</Text>
        </Body>
      </Left>
    </CardItem>
  </Card>
);

export default CardMessage;

const styles = StyleSheet.create({
  cardContainer: {
    borderColor: 'transparent',
    shadowColor: 'transparent',
  },
  thumbnail: {
    marginLeft: -5,
  }
});
