import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Gs} from '../../../assets/Styles/GlobalStyle';
import {colors} from '../../../assets/Styles/Colors';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#1ABC9C" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: '100%',
    height: '100%',
    ...Gs.itemsCenter,
    ...Gs.justifyCenter,
  },
  text: {
    fontSize: 18,
    fontWeight: 300,
    marginTop: 12,
    color: colors.grey,
  },
});
