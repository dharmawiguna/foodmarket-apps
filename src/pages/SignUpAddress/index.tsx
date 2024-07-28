import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../../assets/Styles/Colors';
import {Gs} from '../../assets/Styles/GlobalStyle';
import {Button, Gap, Header, Select, TextInput} from '../../components';
import {setLoading, signUpAction} from '../../redux/action';
import {AppDispatch, RootState} from '../../redux/store';
import {useForm} from '../../utils';

interface SignUpAddressProps {
  navigation: any;
}
export function SignUpAddress({navigation}: SignUpAddressProps): JSX.Element {
  const registerReducer = useSelector(
    (state: RootState) => state.registerReducer,
  );
  const photoReducer = useSelector((state: RootState) => state.photoReducer);

  // async function uriToBlob(newuri: string): Promise<Blob> {
  //   const response = await fetch(newuri);
  //   const blob = await response.blob();
  //   return blob;
  // }

  const dispatch = useDispatch<AppDispatch>();
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    city: 'Denpasar',
    houseNumber: '',
  });

  const onSubmit = () => {
    const data = {
      ...form,
      ...registerReducer,
    };

    dispatch(setLoading(true));
    dispatch(signUpAction(data, photoReducer, navigation));
  };

  const options = [
    {label: 'Denpasar', value: 'Denpasar'},
    {label: 'Jakarta', value: 'Jakarta'},
    {label: 'Bandung', value: 'Bandung'},
    {label: 'Jogjakarta', value: 'Jogjakarta'},
    {label: 'Malang', value: 'Malang'},
  ];

  return (
    <ScrollView contentContainerStyle={styles.contentScroll}>
      <SafeAreaView style={styles.page}>
        <Header title="Sign Up" subtitle="Register & eat" onBack />
        <View style={styles.container}>
          <TextInput
            label="Phone No"
            placeholder="type your phone no."
            value={form.phoneNumber}
            onChangeText={value => setForm('phoneNumber', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Address"
            placeholder="type your address"
            value={form.address}
            onChangeText={value => setForm('address', value)}
          />
          <Gap height={16} />
          <TextInput
            label="House Number"
            placeholder="type your House Number"
            value={form.houseNumber}
            onChangeText={value => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <Select
            label="City"
            options={options}
            value={form.city}
            onSelectChange={value => setForm('city', value)}
          />
          <Gap height={20} />
          <Button title="Sign Up Now" onPress={onSubmit} />
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
