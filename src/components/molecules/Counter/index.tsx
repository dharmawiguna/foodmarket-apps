import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IcAdd, IcMin} from '../../../assets';
import {Gs} from '../../../assets/Styles/GlobalStyle';
import {colors} from '../../../assets/Styles/Colors';

const Counter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <IcMin />
      </TouchableOpacity>
      <Text style={styles.value}>1</Text>
      <TouchableOpacity>
        <IcAdd />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
  },
  value: {
    fontSize: 16,
    fontWeight: 500,
    color: colors.black,
    marginHorizontal: 10,
  },
});
