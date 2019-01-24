import React, { Component } from 'react';
import { Container, Content, } from 'native-base'
//components
import Card from '../../cardComponent/containers/card'

const data = {
  "id": 10,
  "createAt": "23 Jan 19",
  "type": "picture",
  "image": "./assets/example-01.jpg",
  "liked": true,
  "likes": 100,
  "description": "Con el tiempo, sabrán lo que es perder, sentir en lo mas profundo que tienes razon y aun asi, fallar.",
}

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card
          username='TitanLoco8'
          profileImage={require('../../../assets/profile.jpg')}
          uploadDate='Ene 2019'
          picture={require('../../../assets/example-01.jpg')}
          Liked={false}
          likes={245}
          description='Con el tiempo, sabrán lo que es perder. Sentir en lo mas profundo que tienes razón... Y aun así, fallar.'
          />
          <Card
          username='TitanLoco8'
          profileImage={require('../../../assets/profile.jpg')}
          uploadDate='Ene 2019'
          picture={require('../../../assets/example-01.jpg')}
          Liked={false}
          likes={245}
          description='Con el tiempo, sabrán lo que es perder. Sentir en lo mas profundo que tienes razón... Y aun así, fallar.'
          />
        </Content>
      </Container>

    );
  }
}
