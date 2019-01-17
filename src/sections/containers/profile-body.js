import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Icon, Button} from 'native-base'
var { height, width } = Dimensions.get('window');
// components
import Card from '../../cardComponent/containers/card'

var images = [
    require('../../../assets/example-01.jpg'),
    require('../../../assets/example-01.jpg'),
    require('../../../assets/example-01.jpg'),
    require('../../../assets/example-01.jpg'),
    require('../../../assets/example-01.jpg'),
    require('../../../assets/example-01.jpg'),
    require('../../../assets/example-01.jpg'),
    require('../../../assets/example-01.jpg'),
    require('../../../assets/example-01.jpg'),
    require('../../../assets/example-01.jpg'),
]

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

  clickOnCard = () => {
    Alert.alert('You tapped the button!')
  }

  renderGridSection = () => {
    return images.map((image, index) => {
      return (
          <View>
            <TouchableOpacity
              key={index}
              style={[styles.gridContainer, index % 3 !== 0 ? styles.gridPaddingLeft : styles.gridPaddingLeftNone]}
              onPress={this.clickOnCard }
            >
                <Image
                  style={styles.gridImage}
                  source={image}

                />
            </TouchableOpacity>
          </View>
      )
    })
  }

  renderSection = () => {
    if (this.state.activeIndex == 0) {
      return (
        <View style={styles.gridSectionContainer}>
          {this.renderGridSection()}
        </View>
      )
    } else if (this.state.activeIndex == 1) {
      return (
        <View>
          <Card />
          <Card />
        </View>
      )
    }
  }

  render() {
    return (
      <View>
        <View>
          <View style={styles.navbarContainer}>
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
          </View>{/* end navbarContainer */}
        </View>

        {this.renderSection()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#eae5e5',
  },
  gridSectionContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridContainer: {
    width: (width) / 3,
    height: (width) / 3,
    marginBottom: 2,
  },
  gridPaddingLeft:{
    paddingLeft: 2,
  },
  gridPaddingLeftNone: {
    paddingLeft: 0,
  },
  gridImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
  }
});
