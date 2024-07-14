import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../assets/Styles/Colors';
import {Rating} from '../Rating';

interface FoodCardProps {
  image: any;
  name: string;
  rating: number;
}

export function FoodCard({image, name, rating}: FoodCardProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.text}>{name}</Text>
        <Rating rating={rating} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: colors.white,
    borderRadius: 8,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
    marginRight: 24,
  },
  content: {
    padding: 12,
  },
  text: {
    fontSize: 16,
    color: colors.black,
  },
  image: {
    width: 200,
    height: 140,
    resizeMode: 'cover',
  },
});
