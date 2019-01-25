import React, { Component } from 'react';
import firebase from 'react-native-firebase';
// components
import LoadingUI from '../../sections/components/loading'

export default class Loading extends Component {

  constructor() {
    super();
    this.unsubscriber = null;
    this.state = {
     user: null,
   };
  }

  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
      if (!this.state.user) {
        this.props.navigation.navigate('Login')
      } else {
        this.props.navigation.navigate('App')
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  render() {
    return (
      <LoadingUI />
    );
  }
}
