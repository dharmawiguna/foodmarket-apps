import Axios from 'axios';
import constants from '../../utils/constants';
import ShowMessage, {showMessage} from '../../utils/ShowMessage';
import {setLoading} from './global';
import {storeData} from '../../utils';

interface dataRegisterProps {
  phoneNumber: string;
  address: string;
  city: string;
  houseNumber: string;
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

interface photoReducerProps {
  uri: string;
  isUploadPhoto: boolean;
  type: string;
  name: string;
}

export const signUpAction =
  (
    dataRegister: dataRegisterProps,
    photoReducer: photoReducerProps,
    navigation: any,
  ) =>
  (dispatch: any) => {
    Axios.post(`${constants.DEFAULT_URL}/register`, dataRegister)
      .then(res => {
        const photoUrl = 'http://localhost:8000/storage/';
        const accessToken = res.data.data.access_token;
        const profile = res.data.data.user;
        storeData('token', {value: `Bearer ${accessToken}`});

        if (photoReducer.isUploadPhoto && photoReducer.uri) {
          const photoFormUpload = new FormData();
          photoFormUpload.append('file', photoReducer); // Appending the Blob to FormData

          Axios.post(`${constants.DEFAULT_URL}/user/photo`, photoFormUpload, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'multipart/form-data',
            },
          })
            .then(resUpload => {
              profile.profile_photo_url = `${photoUrl}${resUpload.data.data[0]}`;
              storeData('userProfile', profile);
              setTimeout(() => {
                navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
              }, 2000);
            })
            .catch(err => {
              ShowMessage('Upload Failed!');
              console.log(err);
              setTimeout(() => {
                navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
              }, 2000);
            });
        } else {
          storeData('userProfile', profile);
          setTimeout(() => {
            navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
          }, 2000);
        }

        ShowMessage('Register Success', 'success');
        dispatch(setLoading(false));
      })
      .catch(err => {
        dispatch(setLoading(false));
        ShowMessage(err?.response?.data?.data?.message);
      });
  };

interface FormRegisterProps {
  email: string;
  password: string;
}

export const signInAction =
  (form: FormRegisterProps, navigation: any) => (dispatch: any) => {
    Axios.post(`${constants.DEFAULT_URL}/login`, form)
      .then(res => {
        const token = `Bearer ${res.data.data.access_token}`;
        const profile = res.data.data.user;
        dispatch(setLoading(false));

        storeData('token', {value: token});
        storeData('userProfile', profile);
        navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
      })
      .catch(err => {
        showMessage(err?.response?.data?.data?.message);
        dispatch(setLoading(false));
      });
  };
