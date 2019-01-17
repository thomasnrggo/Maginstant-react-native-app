import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Icon, Button} from 'native-base'
// components

export default class ProfileNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
    }
  }

  selectedView = (index) => {
    this.setState({
      activeIndex: index,
    })
  }

  renderSection = () => {
    if (this.state.activeIndex == 0) {
      return (
        <View>
          <Text>First Section</Text>
        </View>
      )
    }
  }

  render() {
    return (
      <View>
        <View>
          <View style={styles.container}>
            <Button
              transparent
              onPress={()=> this.selectedView(0)}
            >
              <Icon
                type="SimpleLineIcons" name="grid"
                style={[this.state.activeIndex == 0 ? {} : {color: 'grey'}]}
              />
            </Button>
            <Button
              transparent
              onPress={()=> this.selectedView(1)}
            >
              <Icon
                type="SimpleLineIcons" name="list"
                style={[this.state.activeIndex == 1 ? {} : {color: 'grey'}]}
              />
            </Button>
          </View>
        </View>

        {this.renderSection()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#eae5e5',
  },
});
