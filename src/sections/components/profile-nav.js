import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Icon, Button} from 'native-base'

const ProfileNav = ({}) => (
  <View>
    <View style={styles.container}>
      <Button
        transparent
      >
        <Icon
          type="SimpleLineIcons" name="grid"
        />
      </Button>
      <Button
        transparent
      >
        <Icon
          type="SimpleLineIcons" name="list"
        />
      </Button>
    </View>
  </View>
);

export default ProfileNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#eae5e5',
  },
});
