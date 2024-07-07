import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Router from './router';
import {Provider, useSelector} from 'react-redux';
import store, {RootState} from './redux/store';
import FlashMessage from 'react-native-flash-message';
import {Loading} from './components';

const MainApp = () => {
  const {isLoading} = useSelector((state: RootState) => state.globalReducer);
  console.log(isLoading);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Router />
          <FlashMessage position="top" />
          {isLoading && <Loading />}
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
};

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
