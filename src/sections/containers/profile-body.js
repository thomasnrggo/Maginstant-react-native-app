import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Alert,
  FlatList,
} from 'react-native';
import { Icon, Button, Content, Container} from 'native-base'
import { withNavigation } from 'react-navigation';
let { height, width } = Dimensions.get('window');
// components
import Card from '../../cardComponent/containers/card'

class ProfileNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
      data:
      [
        {
          "id": "10",
          "username": "TitanLoco8",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/thanos2.jpg?alt=media&token=f6a320bb-dc4b-43ba-9a22-f8453f1ff732",
          "type": "picture",
          "picture": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/example-01.jpg?alt=media&token=9512ab93-dda2-437e-bf65-bcb27f7fd0a1",
          "liked": true,
          "likes": 12332,
          "description": "Con el tiempo, sabrán lo que es perder, sentir en lo mas profundo que tienes razon y aun asi, fallar.",
          "createAt": "23 Jan 19",
        },
        {
          "id": "11",
          "username": "TitanLoco8",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/thanos2.jpg?alt=media&token=f6a320bb-dc4b-43ba-9a22-f8453f1ff732",
          "type": "picture",
          "picture": "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/vengadores-infinity-war-y-si-thanos-tiene-razon/138031348-1-esl-ES/Vengadores-Infinity-War-Y-si-Thanos-tiene-razon.jpg",
          "liked": true,
          "likes": 12832,
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat condimentum purus, ac malesuada massa gravida ut. Sed ut tempor felis, sed tincidunt nulla.",
          "createAt": "23 Jan 19",
        },
        {
          "id": "12",
          "username": "TitanLoco8",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/thanos2.jpg?alt=media&token=f6a320bb-dc4b-43ba-9a22-f8453f1ff732",
          "type": "picture",
          "picture": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/picture-3.jpg?alt=media&token=a8acb1c5-72c7-4e04-b9d9-c05e716f3800",
          "liked": true,
          "likes": 12312,
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat condimentum purus, ac malesuada massa gravida ut. Sed ut tempor felis, sed tincidunt nulla.",
          "createAt": "23 Jan 19",
        },
        {
          "id": "13",
          "username": "TitanLoco8",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/thanos2.jpg?alt=media&token=f6a320bb-dc4b-43ba-9a22-f8453f1ff732",
          "type": "picture",
          "picture": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/picture-2.jpg?alt=media&token=6be8fcba-ad31-42a9-8195-9510c4067f8e",
          "liked": true,
          "likes": 123,
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat condimentum purus, ac malesuada massa gravida ut. Sed ut tempor felis, sed tincidunt nulla.",
          "createAt": "23 Jan 19",
        },
        {
          "id": "14",
          "username": "TitanLoco8",
          "profileImage": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/thanos2.jpg?alt=media&token=f6a320bb-dc4b-43ba-9a22-f8453f1ff732",
          "type": "picture",
          "picture": "https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/picture-1.jpg?alt=media&token=e8bd37d3-0fcc-433b-bdd5-9c0a27a98db0",
          "liked": true,
          "likes": 123,
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat condimentum purus, ac malesuada massa gravida ut. Sed ut tempor felis, sed tincidunt nulla.",
          "createAt": "23 Jan 19",
        },
      ],
    }
  }

  _keyExtractor = (item, index) => item.id;

  selectedView = (index) => {
    this.setState({
      activeIndex: index,
    })
  }

  clickOnCard = () => {
    const data = this.state.data
    const id = this.index
    this.props.navigation.navigate('Detail', {data: data, itemId: id });
  }

  renderGridSection = () => {
    const data = this.state.data
    const imagesForGrid = data.map((data) => data.picture)
    return imagesForGrid.map((picture, index) => {
      return (
          <View>
            <TouchableOpacity
              key={this._keyExtractor}
              style={[styles.gridContainer, index % 3 !== 0 ? styles.gridPaddingLeft : styles.gridPaddingLeftNone]}
              onPress={()=> {
                const data = this.state.data
                this.props.navigation.navigate('Detail', {data: data, itemId: index });
              }}
            >
                <Image
                  style={styles.gridImage}
                  source={{uri: picture}}
                />
            </TouchableOpacity>
          </View>
      )
    })
  }

  renderListSection = ({item}) => (
      <Card
        id={item.id}
        username={item.username}
        profileImage={item.profileImage}
        uploadDate={item.createAt}
        picture={item.picture}
        Liked={item.liked}
        likes={item.likes}
        description={item.description}
      />
  )

  renderSection = () => {
    if (this.state.activeIndex == 0) {
      return (
        <View style={styles.gridSectionContainer}>
          {this.renderGridSection()}
        </View>
      )
    } else if (this.state.activeIndex == 1) {
      const item = this.state.data[0];
      return (
        <FlatList
          data={this.state.data}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderListSection}
        />
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
                type="AntDesign" name="appstore-o"
                style={[this.state.activeIndex == 0 ? {} : {color: 'grey'}]}
              />
            </Button>
            <Button
              transparent
              onPress={()=> this.selectedView(1)}
            >
              <Icon
                type="AntDesign" name="bars"
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

export default withNavigation(ProfileNav);

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#dedede',
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
