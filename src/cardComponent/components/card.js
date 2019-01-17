import React from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Left, Thumbnail, Button, Icon, Right } from "native-base";


const CardComponent = (props) => (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail
              source={require('../../../assets/profile.jpg')}
            />
            <Body>
              <Text style={styles.username}>TitanLoco8</Text>
              <Text note>Jan 12, 2019</Text>
            </Body>
          </Left>
        </CardItem>

        <CardItem cardBody>
          <Image
            style={styles.image}
            source={require('../../../assets/example-01.jpg')}
          />
        </CardItem>

        <CardItem style={{height: 40}}>
          <Left>
            <Button transparent style={styles.btn}>
              <Icon type="SimpleLineIcons" name="heart" style={{color: 'black'}} />
            </Button>
            <Text style={styles.liketxt}>12819 Likes</Text>
          </Left>
        </CardItem>

        <CardItem>
          <Text style={styles.caption}>
            <Text style={styles.username}>TitanLoco8 </Text>
               Con el tiempo, sabrán lo que es perder. Sentir en lo mas profundo que tienes razón... Y aun así, fallar.
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
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  liketxt: {
    marginLeft: -2,
  },
  caption: {
  },
});
