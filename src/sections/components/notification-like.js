import React from 'react';
import {
  View,
} from 'react-native';
import {Thumbnail, Text,} from 'native-base'

const NotificationTypeLike = (props) => (
  <View>
    <Thumbnail square
      source={{ uri: props.picture }}
    />
  </View>
);

export default NotificationTypeLike;
