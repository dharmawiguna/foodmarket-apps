import Axios from 'axios';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {useSelector} from 'react-redux';
import {colors} from '../../assets/Styles/Colors';
import {Gs} from '../../assets/Styles/GlobalStyle';
import {Button, Gap, Header, Select, TextInput} from '../../components';
import {RootState} from '../../redux/store';
import {useForm} from '../../utils';
import constants from '../../utils/constants';

interface SignUpAddressProps {
  navigation: any;
}
export function SignUpAddress({navigation}: SignUpAddressProps): JSX.Element {
  const registerReducer = useSelector(
    (state: RootState) => state.registerReducer,
  );
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

    Axios.post(`${constants.DEFAULT_URL}/register`, data)
      .then(res => {
        console.log(res);
        showToast('Register Success', 'success');
        setTimeout(() => {
          navigation.replace('SuccessSignUp');
        }, 2000);
      })
      .catch(err => {
        showToast(err?.response?.data?.data?.message);
      });
  };

  // Assuming MessageType is defined like this:
  type MessageType = 'info' | 'warning'; // Example definition

  // Define the custom type for the showToast function
  type CustomToastType = 'success' | 'error';

  const showToast = (message: string, type: CustomToastType = 'error') => {
    // Convert CustomToastType to MessageType
    let messageType: MessageType | undefined;
    switch (type) {
      case 'success':
        messageType = 'info';
        break;
      case 'error':
        messageType = 'warning';
        break;
      default:
        messageType = undefined;
    }

    showMessage({
      message,
      type: messageType,
      backgroundColor: type === 'success' ? '#1ABC9C' : '#D9435E',
    });
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
