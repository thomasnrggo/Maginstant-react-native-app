/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from 'react-native';

export default class SearchHeader extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <TextInput
            style={styles.searchInput}
            placeholder='Buscar'
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  searchInput: {
    textAlign: 'center',
    backgroundColor: '#f1f0f0',
    marginTop: 4,
    marginHorizontal: 16,
    padding: 8,
    borderRadius: 8,
  }
});
