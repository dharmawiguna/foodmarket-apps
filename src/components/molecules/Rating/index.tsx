import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IcStarOff, IcStarOn} from '../../../assets';
import {Gs} from '../../../assets/Styles/GlobalStyle';

interface RatingProps {
  rating: number;
}
export function Rating({rating}: RatingProps): JSX.Element {
  const renderStar = () => {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        star.push(<IcStarOn key={i} />);
      } else {
        star.push(<IcStarOff key={i} />);
      }
    }
    return star;
  };
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.starContainer}>{renderStar()}</View>
      <Text>{rating}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ratingContainer: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
  },
  starContainer: {
    ...Gs.flexRow,
    marginRight: 4,
  },
});
