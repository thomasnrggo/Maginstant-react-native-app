import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Thumbnail, Text, Right, Button} from 'native-base'
import NewFollower from './notification-follow'
import NewComment from './notification-comment'
import NewLike from './notification-like'

export default class Notification extends Component {

  constructor(props) {
    super(props)
  }

  handleNotificationType() {
    if (this.props.type == "NEW_FOLLOWER") {
      return <NewFollower />
    } else if (this.props.type == "NEW_COMMENT") {
      return <NewComment  picture={this.props.picture}/>
    } else if (this.props.type == "NEW_LIKE") {
      return <NewLike  picture={this.props.picture}/>
    } else {
      return <Text>{this.props.type}</Text>
    }
  }

  handleNotificationTypeMessage() {
    let message
    if (this.props.type == "NEW_FOLLOWER") {
        return message = 'Te ha empezado a seguir.'
    } else if (this.props.type == "NEW_COMMENT") {
        return message = 'Ha comentado tu foto.'
    } else if (this.props.type == "NEW_LIKE") {
        return message = 'Le ha gustado tu foto.'
    }
  }

  render() {

    return (
      <TouchableOpacity style={styles.notificationContainer}>
        <Thumbnail
          source={{ uri: this.props.profileImage }}
        />
        <View style={styles.notificationBox}>
          <Text style={styles.username}>{this.props.username}</Text>
          <Text style={styles.notification} note>{this.handleNotificationTypeMessage()}</Text>
        </View>
        <Right>
          {this.handleNotificationType()}
        </Right>
      </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 5,
    paddingBottom: 6,
  },
  notificationBox: {
    paddingLeft: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 13,
    letterSpacing: .4,
  },
  notification: {
    fontSize: 14,
  },
});
