import React, { Component } from 'react';
import {Container, Content} from 'native-base'
import CardComponent from '../components/card.js'

export default class CardContainer extends Component {
  render() {
    return (
        <CardComponent
          username='TitanLoco8'
          profileImage={require('../../../assets/profile.jpg')}
          uploadDate={Date.now()}
          picture={require('../../../assets/example-01.jpg')}
          likes={245}
          description='Con el tiempo, sabrán lo que es perder. Sentir en lo mas profundo que tienes razón... Y aun así, fallar.'
        />

    );
  }
}
