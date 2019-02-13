import React from 'react';
import {
  View,
  StyleSheet,
  Image,
} from 'react-native';
import { Container, Content, Text, Button, Icon } from 'native-base'

const ProfileHead = (props) => (
  <View>
    <View style={styles.profileHeadContainer}>
      <View style={styles.profileHeadWrapper}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{uri: 'https://firebasestorage.googleapis.com/v0/b/magistant-c3788.appspot.com/o/thanos2.jpg?alt=media&token=f6a320bb-dc4b-43ba-9a22-f8453f1ff732'}}
            style={styles.profilePicture}
          />
        </View>{/* end profileImageContainer */}

        <View style={styles.detailsContainer}>
          <View style={styles.detailsWrapper}>
            <View style={styles.detail}>
                <Text style={styles.detailNumber}>1</Text>
                <Text style={styles.detailTitle}>Publicaciones</Text>
            </View>{/* end details */}
            <View style={styles.detail}>
                <Text style={styles.detailNumber}>120 k</Text>
                <Text style={styles.detailTitle}>Seguidores</Text>
            </View>{/* end details */}
            <View style={styles.detail}>
                <Text style={styles.detailNumber}>249</Text>
                <Text style={styles.detailTitle}>Seguidos</Text>
            </View>{/* end details */}
          </View>{/* end detailsWrapper */}

          <View style={styles.profileEditContainer}>
              <View style={styles.editButtonContainer}>
                  <Button
                    bordered
                    dark
                    style={styles.editButton}>
                      <Text
                        style={styles.editButtonText}
                      >
                        Editar perfil
                      </Text>
                  </Button>
              </View>
          </View>{/**End edit profile**/}

        </View>{/* end detailsContainer */}
      </View>{/* end profileHeadWrapper */}

      <View style={styles.profileDescription}>
              <Text style={styles.fullname}>Thanos de Titan</Text>
              <Text style={styles.description}>El titan loco{"\n"}www.infinitygaunlet.com </Text>
      </View>{/* end profileDescription */}

    </View>{/* end profileHeadWrapper */}

    <View style={styles.contactContainer}>
        <View style={styles.contactBtnContainer}>
            <Button
              transparent
              style={styles.contactBtn}>
                <Text
                  style={styles.editButtonText}
                >
                  Llamar
                </Text>
            </Button>
            <Button
              transparent
              style={styles.contactBtn}>
                <Text
                  style={styles.editButtonText}
                >
                  Enviar correo
                </Text>
            </Button>
        </View>
    </View>{/**End contant buttons**/}

  </View>
);

export default ProfileHead;

const styles = StyleSheet.create({
  profileHeadContainer: {
    paddingVertical: 14,
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
    color: '#b5b2b2',
  },
  profileDescription:{
    padding: 10,
  },
  fullname:{
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: .16,
    marginVertical: 2,
  },
  description: {
    marginTop: 4,
    fontSize: 13,
    color: '#333232',
  },
  profileEditContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 10
  },
  editButtonContainer: {
    flexDirection: 'row',
  },
  editButton: {
    flex: 1,
    marginHorizontal: 12,
    justifyContent: 'center',
    height: 30,
    borderColor: '#b5b2b2',
    borderRadius: 5,
  },
  editButtonText: {
    fontSize: 14,
  },
  contactContainer:{

  },
  contactBtnContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#dedede',
  },
  contactBtn: {
    flex: 1,
    margin: 0,
    justifyContent: 'center',
    height: 36,
  },
});
