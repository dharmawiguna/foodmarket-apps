import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  FoodDetail,
  Home,
  Order,
  OrderDetail,
  OrderSummary,
  Profile,
  SignIn,
  SignUp,
  SignUpAddress,
  SplashScreen,
  SuccessOrder,
  SuccessSignUp,
} from '../pages';
import {RootStackParamList} from '../types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  const renderTabBar = (props: any) => <BottomNavigator {...props} />;
  return (
    <Tab.Navigator tabBar={renderTabBar} screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignUpAddress" component={SignUpAddress} />
      <Stack.Screen name="SuccessSignUp" component={SuccessSignUp} />
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="FoodDetail" component={FoodDetail} />
      <Stack.Screen name="OrderSummary" component={OrderSummary} />
      <Stack.Screen name="SuccessOrder" component={SuccessOrder} />
      <Stack.Screen name="OrderDetail" component={OrderDetail} />
    </Stack.Navigator>
  );
};

export default Router;
