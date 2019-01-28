import React, { Component } from 'react';
import { Alert } from 'react-native'
import {Container, Content} from 'native-base'
import CardComponent from '../components/card.js'

export default class CardContainer extends Component {


  render() {
    return (
        <CardComponent
          {...this.props}
        />
    );
  }
}
