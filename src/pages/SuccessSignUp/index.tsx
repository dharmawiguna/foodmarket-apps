import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IlSuccessSignUp} from '../../assets';
import {Button, Gap} from '../../components';
import {Gs} from '../../assets/Styles/GlobalStyle';
import {colors} from '../../assets/Styles/Colors';

interface SuccessSignUpProps {
  navigation: any;
}

export function SuccessSignUp({navigation}: SuccessSignUpProps): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <IlSuccessSignUp />
      <Gap height={30} />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Gap height={6} />
      <Text style={styles.subtitle}>Now you are able to order</Text>
      <Text style={styles.subtitle}>some foods as a self-reward</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          title="Find Foods"
          onPress={() =>
            navigation.reset({index: 0, routes: [{name: 'MainApp'}]})
          }
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
  },
});
