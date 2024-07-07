import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {IlEmptyOrder} from '../../../assets';
import {colors} from '../../../assets/Styles/Colors';
import {Gs} from '../../../assets/Styles/GlobalStyle';
import {RootStackParamList} from '../../../types';
import {Button, Gap} from '../../atoms';

export default function EmptyOrder(): JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.container}>
      <IlEmptyOrder />
      <Gap height={30} />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Gap height={6} />
      <Text style={styles.subtitle}>Now you are able to order</Text>
      <Text style={styles.subtitle}>some foods as a self-reward</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          title="Find Foods"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Gs.bgWhite,
    flex: 1,
    ...Gs.itemsCenter,
    ...Gs.justifyCenter,
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    color: colors.black,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 300,
    color: colors.grey,
  },
  buttonContainer: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingHorizontal: 80,
  },
});
