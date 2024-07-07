import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ProfileDummy} from '../../../assets/Dummy';
import {colors} from '../../../assets/Styles/Colors';
import {Gs} from '../../../assets/Styles/GlobalStyle';

const HomeProfile = () => {
  return (
    <View>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.appName}>FoodMarket</Text>
          <Text style={styles.desc}>Let's get some foods</Text>
        </View>
        <Image source={ProfileDummy} style={styles.profile} />
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  profileContainer: {
    ...Gs.flexRow,
    ...Gs.justifyBetween,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 24,
    backgroundColor: colors.white,
  },
  appName: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    fontWeight: 500,
    color: colors.black,
  },
  desc: {
    fontSize: 14,
    fontWeight: 300,
    color: colors.grey,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});
