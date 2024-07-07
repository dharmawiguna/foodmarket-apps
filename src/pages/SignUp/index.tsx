import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {colors} from '../../assets/Styles/Colors';
import {Gs} from '../../assets/Styles/GlobalStyle';
import {Button, Gap, Header, TextInput} from '../../components';
import {AppDispatch} from '../../redux/store';
import {useForm} from '../../utils';
import * as ImagePicker from 'react-native-image-picker';
import showMessage from '../../utils/ShowMessage';

interface SignUpProps {
  navigation: any;
}
export function SignUp({navigation}: SignUpProps): JSX.Element {
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const [photo, setPhoto] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = () => {
    dispatch({type: 'SET_REGISTER', value: form});
    navigation.navigate('SignUpAddress');
  };

  const addPhoto = () => {
    const options: ImagePicker.CameraOptions = {
      mediaType: 'photo',
    };

    ImagePicker.launchImageLibrary(
      options,
      (response: ImagePicker.ImagePickerResponse) => {
        if (response.didCancel || response.errorCode) {
          showMessage('Anda tidak memiliki foto');
        } else if (response.assets && response.assets.length > 0) {
          const asset = response.assets[0];
          const dataImage = {
            uri: asset.uri,
            type: asset.type,
            name: asset.fileName,
          };
          if (asset.uri) {
            setPhoto(asset.uri);
            dispatch({type: 'SET_PHOTO', value: dataImage});
            dispatch({type: 'SET_UPLOAD_STATUS', value: true});
          }
        }
      },
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.contentScroll}>
      <SafeAreaView style={styles.page}>
        <Header title="Sign Up" subtitle="Register & eat" onBack />
        <View style={styles.container}>
          <TouchableOpacity onPress={addPhoto}>
            <View style={styles.photo}>
              <View style={styles.borderPhoto}>
                {photo ? (
                  <Image source={{uri: photo}} style={styles.photoContainer} />
                ) : (
                  <View style={styles.photoContainer}>
                    <Text style={styles.addPhoto}>Add Photo</Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
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
    marginTop: 10,
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
    ...Gs.itemsCenter,
    ...Gs.justifyCenter,
  },
  addPhoto: {
    fontSize: 14,
    fontWeight: '300',
    color: colors.grey,
    textAlign: 'center',
  },
});
