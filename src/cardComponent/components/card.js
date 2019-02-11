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
          <Body>
            <Text style={styles.description}>
              <Text style={styles.username}>
                {`${props.username} `}
              </Text>
                 {props.description}
            </Text>
            <Text
              note
              onPress={()=> {console.log('Me toco!')}}
            >
              ver los 13 comentarios
            </Text>
          </Body>
        </CardItem>

        <CardItem>
          <Body style={styles.commetsContainer}>
            <Text style={styles.commet}>
              <Text style={styles.commetUsername}>{`Gamo_ri `}</Text>
              Comentario
            </Text>
            <Text style={styles.commet}>
              <Text style={styles.commetUsername}>{`NebulaZa `}</Text>
              lorem ipsum amenr.
            </Text>
          </Body>
        </CardItem>


      </Card>
);

export default CardComponent;

const styles = StyleSheet.create({
  username: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  image: {
    height: 360,
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
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 6,
  },
  commetsContainer: {
    marginTop: -8,
  },
  commetUsername:{
    fontSize: 14,
    fontWeight: 'bold',
  },
  commet:{
    lineHeight: 16,
    fontSize: 14,
    marginBottom: 4,
  },
});
