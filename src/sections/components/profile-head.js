import React from 'react';
import {
  View,
  StyleSheet,
  Image,
} from 'react-native';
import { Container, Content, Text, } from 'native-base'

const ProfileHead = () => (
  <View style={styles.profileHeadContainer}>
    <View style={styles.profileHeadWrapper}>
      <View style={styles.profileImageContainer}>
        <Image
          source={require('../../../assets/profile.jpg')}
          style={styles.profilePicture}
        />
      </View>{/* end profileImageContainer */}

      <View style={styles.detailsContainer}>
        <View style={styles.detailsWrapper}>
          <View style={styles.detail}>
              <Text style={styles.detailNumber}>1</Text>
              <Text style={styles.detailTitle}>Post</Text>
          </View>{/* end details */}
          <View style={styles.detail}>
              <Text style={styles.detailNumber}>120 k</Text>
              <Text style={styles.detailTitle}>Followers</Text>
          </View>{/* end details */}
          <View style={styles.detail}>
              <Text style={styles.detailNumber}>249</Text>
              <Text style={styles.detailTitle}>Following</Text>
          </View>{/* end details */}
        </View>{/* end detailsWrapper */}
      </View>{/* end detailsContainer */}

    </View>{/* end profileHeadWrapper */}

    <View style={styles.profileDescription}>
            <Text style={styles.fullname}>Thanos de Titan</Text>
            <Text style={styles.description}>El titan loco{"\n"}www.infinitygaunlet.com </Text>
    </View>{/* end profileDescription */}
  </View>
);

export default ProfileHead;

const styles = StyleSheet.create({
  profileHeadContainer: {
    paddingVertical: 10,
  },
  profileHeadWrapper: {
    flexDirection: 'row',
  },
  profileImageContainer:{
    flex: 1,
    alignItems: 'center',
  },
  profilePicture:{
    width: 75,
    height: 75,
    borderRadius: 37,
  },
  detailsContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  detailsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  detail: {
    alignItems: 'center',
  },
  detailNumber:{

  },
  detailTitle: {
    fontSize: 12,
    color: 'gray',
  },
  profileDescription:{
    padding: 10,
  },
  fullname:{
    fontWeight: 'bold',
    marginBottom: 2,
  },
  description: {
    fontSize: 14,
    color: '#262626',
  },
});
