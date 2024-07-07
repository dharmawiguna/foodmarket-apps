import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../../assets/Styles/Colors';

interface ButtonProps {
  title: string;
  color?: string;
  textColor?: string;
  onPress?: () => void;
}

export function Button({
  title,
  color = colors.primary,
  textColor = colors.black,
  onPress,
}: ButtonProps): JSX.Element {
  const dynamicStyles = StyleSheet.create({
    container: {
      backgroundColor: color,
      padding: 12,
      borderRadius: 8,
    },
    text: {
      fontSize: 14,
      fontFamily: 'Poppins-Medium',
      color: textColor,
      textAlign: 'center',
    },
  });
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={dynamicStyles.container}>
        <Text style={dynamicStyles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
