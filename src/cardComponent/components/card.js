import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Left, Thumbnail, Button, Icon, Right } from "native-base";

clickLike = () =>{
  
}

const CardComponent = (props) => (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri: props.profileImage
              }}
            />
            <Body>
              <Text style={styles.username}>{props.username}</Text>
              <Text note>{props.uploadDate}</Text>
            </Body>
          </Left>
        </CardItem>

        <CardItem cardBody>
          <Image
            style={styles.image}
            source={{
              uri: props.picture
            }}
          />
        </CardItem>

        <CardItem style={styles.likeBar}>
          <Left>
            <Button
              transparent
              style={styles.btn}
              onPress={this.clickLike}
            >
              <Icon
                type="SimpleLineIcons"
                name="heart"
                style={{color: 'black'}}
              />
            </Button>
            <Text style={styles.liketxt}>{props.likes}</Text>
          </Left>
        </CardItem>

        <CardItem>
          <Text style={styles.description}>
            <Text style={styles.username}>
              {props.username}
            </Text>
               {props.description}
          </Text>
        </CardItem>


      </Card>
);

export default CardComponent;

const styles = StyleSheet.create({
  username: {
    fontWeight: 'bold',
  },
  image: {
    height: 250,
    width: null,
    flex: 1,
  },
  likeBar: {
    height: 40,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  liketxt: {
    marginLeft: -2,
  },
  description: {
  },
});
