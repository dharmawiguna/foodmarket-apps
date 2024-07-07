import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {colors} from '../../../assets/Styles/Colors';
import {Gs} from '../../../assets/Styles/GlobalStyle';
import ItemListMenu from '../ItemListMenu';

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicatorStyle}
    tabStyle={styles.tabContent}
    renderLabel={({route, focused}) => (
      <Text style={{color: focused ? colors.black : colors.grey}}>
        {route.title}
      </Text>
    )}
    style={styles.tabBarStyle}
  />
);

const Account = () => {
  // const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.tabPage}>
      <ItemListMenu text="Edit Profile" />
      <ItemListMenu text="Home Address" />
      <ItemListMenu text="Security" />
      <ItemListMenu text="Payments" />
    </View>
  );
};

const FoodMarket = () => {
  return (
    <View style={styles.tabPage}>
      <ItemListMenu text="Rate App" />
      <ItemListMenu text="Help Center" />
      <ItemListMenu text="Privacy Policy" />
      <ItemListMenu text="Terms & Conditions" />
    </View>
  );
};

const renderScene = SceneMap({
  1: Account,
  2: FoodMarket,
});

const ProfileTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Account'},
    {key: '2', title: 'FoodMarket'},
  ]);
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={Gs.bgWhite}
    />
  );
};

export default ProfileTabSection;

const styles = StyleSheet.create({
  indicatorStyle: {
    backgroundColor: colors.black,
    height: 3,
    marginLeft: '3%',
  },
  tabBarStyle: {
    backgroundColor: colors.white,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: '#F2f2f2',
    borderBottomWidth: 1,
  },
  tabContent: {
    width: 'auto',
  },
  bgPrimary: {
    ...Gs.bgPrimary,
    flex: 1,
  },
  bgSecondary: {
    backgroundColor: 'red',
    flex: 1,
  },
  tabContainer: {
    flex: 1,
  },
  tabPage: {
    paddingTop: 8,
    flex: 1,
    paddingHorizontal: 24,
  },
});
