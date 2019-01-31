/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Container, Content, } from 'native-base'
// components
import Card from '../../cardComponent/containers/card'

export default class DetailPost extends Component {
  static navigationOptions = {
    title: 'Foto',
  }
  render() {
    const data = this.props.navigation.getParam('data')
    const index = this.props.navigation.getParam('itemId')
    const item = data[index]

    return (
      <Container>
        <Content>
          <Card
            id={item.id}
            username={item.username}
            profileImage={item.profileImage}
            uploadDate={item.createAt}
            picture={item.picture}
            Liked={item.liked}
            likes={`${item.likes} likes`}
            description={item.description}
          />
        </Content>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
