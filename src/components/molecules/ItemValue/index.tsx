import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gs} from '../../../assets/Styles/GlobalStyle';
import {colors} from '../../../assets/Styles/Colors';

interface ItemValueProps {
  label: string;
  value: string;
  valueColor?: boolean;
}

export function ItemValue({
  label,
  value,
  valueColor,
}: ItemValueProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={valueColor ? styles.valueColor : styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Gs.flexRow,
    ...Gs.justifyBetween,
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: 500,
    color: colors.grey,
  },
  value: {
    fontSize: 14,
    fontWeight: 500,
    color: colors.black,
  },
  valueColor: {
    fontSize: 14,
    fontWeight: 500,
    color: '#1ABC9D',
  },
});
