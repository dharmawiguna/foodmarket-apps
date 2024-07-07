import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IcArrowRight} from '../../../assets';
import {Gs} from '../../../assets/Styles/GlobalStyle';
import {colors} from '../../../assets/Styles/Colors';

interface ItemListMenuProps {
  text: string;
}

export default function ItemListMenu({text}: ItemListMenuProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
      <IcArrowRight />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Gs.flexRow,
    ...Gs.justifyBetween,
    ...Gs.itemsCenter,
    paddingVertical: 7,
  },
  title: {
    fontSize: 14,
    color: colors.black,
  },
});
