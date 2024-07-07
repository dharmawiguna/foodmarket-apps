import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IcStarOff, IcStarOn} from '../../../assets';
import {Gs} from '../../../assets/Styles/GlobalStyle';

interface RatingProps {
  rating: number;
}
export function Rating({rating}: RatingProps): JSX.Element {
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.starContainer}>
        <IcStarOn />
        <IcStarOn />
        <IcStarOn />
        <IcStarOn />
        <IcStarOff />
      </View>
      <Text>{rating}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ratingContainer: {
    ...Gs.flexRow,
  },
  starContainer: {
    ...Gs.flexRow,
  },
});
