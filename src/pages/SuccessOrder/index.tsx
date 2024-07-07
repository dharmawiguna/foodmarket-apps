import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IlSuccessOrder} from '../../assets';
import {Button, Gap} from '../../components';
import {Gs} from '../../assets/Styles/GlobalStyle';
import {colors} from '../../assets/Styles/Colors';

interface SuccessOrderProps {
  navigation: any;
}

export function SuccessOrder({navigation}: SuccessOrderProps): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <IlSuccessOrder />
      <Gap height={30} />
      <Text style={styles.title}>You've made order</Text>
      <Gap height={6} />
      <Text style={styles.subtitle}>Just stay at home while</Text>
      <Text style={styles.subtitle}>we are preparing your best food</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          title="Order Other Food"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
      <Gap height={10} />
      <View style={styles.buttonContainer2}>
        <Button
          title="View My Order"
          onPress={() => navigation.replace('MainApp', {screen: 'Order'})}
          color="#8d92a3"
          textColor="white"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Gs.itemsCenter,
    ...Gs.justifyCenter,
    ...Gs.bgWhite,
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
    width: 300,
  },
  buttonContainer2: {
    backgroundColor: '#8d92a3',
    borderRadius: 10,
    paddingHorizontal: 80,
    width: 300,
  },
});
