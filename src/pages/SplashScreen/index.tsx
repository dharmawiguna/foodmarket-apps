import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';
import {colors} from '../../assets/Styles/Colors';
import {Gs} from '../../assets/Styles/GlobalStyle';
import {getData} from '../../utils';

interface SplashScreenProps {
  navigation: any;
}

export default function SplashScreen({
  navigation,
}: SplashScreenProps): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      getData('token').then(res => {
        if (res) {
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        } else {
          navigation.replace('SignIn');
        }
      });
    }, 2000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>Food Market</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    ...Gs.justifyCenter,
    ...Gs.itemsCenter,
  },
  title: {
    fontSize: 32,
    marginTop: 10,
    ...Gs.textBlack,
    fontFamily: 'Poppins-Medium',
  },
});
