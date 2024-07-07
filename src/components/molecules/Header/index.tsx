import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../assets/Styles/Colors';
import {IcBack} from '../../../assets';
import {Gs} from '../../../assets/Styles/GlobalStyle';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  title: string;
  subtitle: string;
  onBack?: boolean;
}

export function Header({title, subtitle, onBack}: HeaderProps): JSX.Element {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <View style={styles.back}>
            <IcBack />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
    ...Gs.flexRow,
    ...Gs.itemsCenter,
  },
  back: {
    padding: 16,
    marginRight: 16,
    marginLeft: -10,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    color: colors.black,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '300',
    color: colors.grey,
  },
});
