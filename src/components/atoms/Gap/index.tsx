import React from 'react';
import {StyleSheet, View} from 'react-native';

interface GapProps {
  width?: number;
  height?: number;
}

export default function Gap({width, height}: GapProps): JSX.Element {
  const styles = StyleSheet.create({
    container: {
      width: width,
      height: height,
    },
  });

  return <View style={styles.container} />;
}
