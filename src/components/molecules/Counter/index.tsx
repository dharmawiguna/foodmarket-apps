import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IcAdd, IcMin} from '../../../assets';
import {Gs} from '../../../assets/Styles/GlobalStyle';
import {colors} from '../../../assets/Styles/Colors';

interface CounterProps {
  onValueChange: (value: number) => void;
}

export default function Counter({onValueChange}: CounterProps): JSX.Element {
  const [value, setValue] = useState<number>(1);

  useEffect(() => {
    onValueChange(value);
  }, [value, onValueChange]);

  const onCount = (type: string) => {
    let result = value;
    if (type === 'plus') {
      result = value + 1;
    }
    if (type === 'minus') {
      if (value > 1) {
        result = value - 1;
      }
    }
    console.log('result', result);
    setValue(result);
    onValueChange(result);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onCount('minus')}>
        <IcMin />
      </TouchableOpacity>
      <Text style={styles.value}>{value}</Text>
      <TouchableOpacity onPress={() => onCount('plus')}>
        <IcAdd />
      </TouchableOpacity>
    </View>
  );
}

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
