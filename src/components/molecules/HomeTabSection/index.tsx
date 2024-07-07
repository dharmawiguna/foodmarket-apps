import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {Food1, Food2, Food3, Food4} from '../../../assets/Dummy';
import {colors} from '../../../assets/Styles/Colors';
import {Gs} from '../../../assets/Styles/GlobalStyle';
import ItemListFood from '../ItemListFood';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../types';

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

const NewTaste = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.tabPage}>
      <ItemListFood
        type="product"
        onPress={() => navigation.navigate('FoodDetail')}
        productName="Soup Bumil"
        price={2000000}
        image={Food1}
      />
      <ItemListFood
        type="product"
        onPress={() => navigation.navigate('FoodDetail')}
        productName="Soup Bumil"
        price={2000000}
        image={Food2}
      />
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.tabPage}>
      <ItemListFood
        type="product"
        onPress={() => navigation.navigate('FoodDetail')}
        image={Food2}
        productName="Soup Bumil"
        price={2000000}
      />
      <ItemListFood
        type="product"
        onPress={() => navigation.navigate('FoodDetail')}
        image={Food3}
        productName="Soup Bumil"
        price={2000000}
      />
      <ItemListFood
        type="product"
        onPress={() => navigation.navigate('FoodDetail')}
        image={Food1}
        productName="Soup Bumil"
        price={2000000}
      />
    </View>
  );
};

const Recommended = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.tabPage}>
      <ItemListFood
        type="product"
        onPress={() => navigation.navigate('FoodDetail')}
        image={Food4}
        productName="Soup Bumil"
        price={2000000}
      />
      <ItemListFood
        type="product"
        onPress={() => navigation.navigate('FoodDetail')}
        image={Food2}
        productName="Soup Bumil"
        price={2000000}
      />
    </View>
  );
};

const renderScene = SceneMap({
  1: NewTaste,
  2: Popular,
  3: Recommended,
});

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
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

export default HomeTabSection;

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
