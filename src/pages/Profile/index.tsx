import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ProfileDummy} from '../../assets/Dummy';
import {colors} from '../../assets/Styles/Colors';
import {Gs} from '../../assets/Styles/GlobalStyle';
import {ProfileTabSection} from '../../components';
import {getData} from '../../utils';

const Profile = () => {
  const [userProfile, setUserProfile] = useState<Record<string, any>>({});
  const [photo, setPhoto] = useState<{uri: string}>({uri: ProfileDummy});

  useEffect(() => {
    const photoUrl = 'http://localhost:8000/storage/';
    getData('userProfile').then(res => {
      setPhoto({uri: photoUrl + res.profile_photo_path});
      setUserProfile(res);
    });
  }, []);
  return (
    <View style={styles.page}>
      <View style={styles.profileDetail}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <Image source={photo} style={styles.photoContainer} />
          </View>
        </View>
        <Text style={styles.name}>{userProfile.name}</Text>
        <Text style={styles.email}>{userProfile.email}</Text>
      </View>
      <View style={styles.content}>
        <ProfileTabSection />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  profileDetail: {
    ...Gs.bgWhite,
    paddingTop: 50,
    paddingBottom: 40,
  },
  photo: {
    ...Gs.itemsCenter,
    marginBottom: 16,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: colors.grey,
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    ...Gs.itemsCenter,
    ...Gs.justifyCenter,
  },
  photoContainer: {
    padding: 24,
    height: 90,
    width: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
  },
  name: {
    fontSize: 18,
    fontWeight: 500,
    color: colors.black,
    textAlign: 'center',
  },
  email: {
    fontSize: 14,
    fontWeight: 300,
    color: colors.grey,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    marginTop: 30,
  },
});
