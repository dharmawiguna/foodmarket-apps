import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../assets/Styles/Colors';
import {Gs} from '../../assets/Styles/GlobalStyle';
import {Button, Gap, Header, TextInput} from '../../components';
import {useForm} from '../../utils';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';

interface SignUpProps {
  navigation: any;
}
export function SignUp({navigation}: SignUpProps): JSX.Element {
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = () => {
    console.log(form);
    dispatch({type: 'SET_REGISTER', value: form});
    navigation.navigate('SignUpAddress');
  };
  return (
    <ScrollView contentContainerStyle={styles.contentScroll}>
      <SafeAreaView style={styles.page}>
        <Header title="Sign Up" subtitle="Register & eat" onBack />
        <View style={styles.container}>
          <View style={styles.photo}>
            <View style={styles.borderPhoto}>
              <View style={styles.photoContainer}>
                <Text style={styles.addPhoto}>Add Photo</Text>
              </View>
            </View>
          </View>
          <TextInput
            label="Full Name"
            placeholder="type your full name"
            value={form.name}
            onChangeText={value => setForm('name', value)}
          />
          <Gap height={16} />
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
            secureTextEntry
            value={form.password}
            onChangeText={value => setForm('password', value)}
          />
          <Gap height={16} />
          <Button title="Continue" onPress={onSubmit} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentScroll: {
    flexGrow: 1,
  },
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    marginTop: 24,
    flex: 1,
  },
  photo: {
    ...Gs.itemsCenter,
    marginBottom: 16,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: colors.grey,
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    ...Gs.itemsCenter,
    ...Gs.justifyCenter,
  },
  photoContainer: {
    padding: 24,
    height: 90,
    width: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
  },
  addPhoto: {
    fontSize: 14,
    fontWeight: '300',
    color: colors.grey,
    textAlign: 'center',
  },
});
