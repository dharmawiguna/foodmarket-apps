import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {colors} from '../../assets/Styles/Colors';
import {Button, Gap, Header, TextInput} from '../../components';
import {useForm} from '../../utils';
import Axios from 'axios';
interface SignInProps {
  navigation: any;
}
export function SignIn({navigation}: SignInProps): JSX.Element {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    Axios.post('http://127.0.0.1:8000/api/login', form)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView style={styles.page}>
      <Header title="Sign In" subtitle="Find Your best ever meal" />
      <View style={styles.container}>
        <TextInput
          label="Email Address"
          placeholder="type your email address"
          value={form.email}
          onChangeText={value => setForm('email', value)}
          autoCapitalize={'none'}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="type your password"
          value={form.password}
          onChangeText={value => setForm('password', value)}
          secureTextEntry
          autoCapitalize={'none'}
        />
        <Gap height={16} />
        <Button title="Sign in" onPress={onSubmit} />
        <Gap height={12} />
        <Button
          title="Create New Account"
          color={colors.grey}
          textColor="white"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
