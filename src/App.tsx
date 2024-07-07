import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Router from './router';
import {Provider} from 'react-redux';
import store from './redux/store';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Provider store={store}>
            <Router />
          </Provider>
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
