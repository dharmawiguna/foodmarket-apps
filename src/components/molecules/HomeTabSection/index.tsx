import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../../../assets/Styles/Colors';
import {Gs} from '../../../assets/Styles/GlobalStyle';
import {getFoodDataByType} from '../../../redux/action';
import {AppDispatch, RootState} from '../../../redux/store';
import {FoodItem, RootStackParamList} from '../../../types';
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

const NewTaste = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {newTaste} = useSelector((state: RootState) => state.homeReducer);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getFoodDataByType('new_food'));
  }, [dispatch]);
  return (
    <View style={styles.tabPage}>
      {newTaste.map(item => {
        return (
          <ItemListFood
            key={item.id}
            type="product"
            onPress={() => navigation.navigate('FoodDetail', {item})}
            productName={item.name}
            price={item.price}
            image={{uri: item.picturePath}}
            rating={parseInt(item.rate, 10)}
          />
        );
      })}
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {popular} = useSelector((state: RootState) => state.homeReducer);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getFoodDataByType('popular'));
  }, [dispatch]);
  return (
    <View style={styles.tabPage}>
      {popular.map((item: FoodItem) => {
        return (
          <ItemListFood
            key={item.id}
            type="product"
            onPress={() => navigation.navigate('FoodDetail', {item})}
            productName={item.name}
            price={item.price}
            image={{uri: item.picturePath}}
            rating={parseInt(item.rate, 10)}
          />
        );
      })}
    </View>
  );
};

const Recommended = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {recommended} = useSelector((state: RootState) => state.homeReducer);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getFoodDataByType('recommended'));
  }, [dispatch]);
  return (
    <View style={styles.tabPage}>
      {recommended.map(item => {
        return (
          <ItemListFood
            key={item.id}
            type="product"
            onPress={() => navigation.navigate('FoodDetail', {item})}
            productName={item.name}
            price={item.price}
            image={{uri: item.picturePath}}
            rating={parseInt(item.rate, 10)}
          />
        );
      })}
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
