import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {Food1, Food2, Food3} from '../../../assets/Dummy';
import {colors} from '../../../assets/Styles/Colors';
import {Gs} from '../../../assets/Styles/GlobalStyle';
import {RootStackParamList} from '../../../types';
import ItemListFood from '../ItemListFood';

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

const InProgress = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.tabPage}>
      <ItemListFood
        onPress={() => navigation.navigate('OrderDetail')}
        image={Food1}
        type="in-progress"
        items="3"
        price={3000000}
        productName="Soup Bumil"
      />
      <ItemListFood
        onPress={() => navigation.navigate('OrderDetail')}
        image={Food2}
        type="in-progress"
        items="3"
        price={3000000}
        productName="Soup Bumil"
      />
      <ItemListFood
        onPress={() => navigation.navigate('OrderDetail')}
        image={Food3}
        type="in-progress"
        items="3"
        price={3000000}
        productName="Soup Bumil"
      />
    </View>
  );
};

const PastOrders = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.tabPage}>
      <ItemListFood
        onPress={() => navigation.navigate('OrderDetail')}
        image={Food2}
        type="past-orders"
        items="3"
        price={3000000}
        productName="Soup buntut"
        date="05-06-2024"
        status="Cancel"
      />
    </View>
  );
};

const renderScene = SceneMap({
  1: InProgress,
  2: PastOrders,
});

const OrderTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
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

export default OrderTabSection;

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
