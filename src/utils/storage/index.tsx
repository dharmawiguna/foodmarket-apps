import AsyncStorage from '@react-native-async-storage/async-storage';
import showMessage from '../ShowMessage';

export const storeData = async (storageKey: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    showMessage('Error save to local storage');
  }
};

export const getData = async (storageKey: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    showMessage('Error get data from local storage');
  }
};
