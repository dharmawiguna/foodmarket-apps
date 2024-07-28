import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../../../assets/Styles/Colors';
import {Gs} from '../../../assets/Styles/GlobalStyle';
import {getInProgress, getPastOrders} from '../../../redux/action';
import {AppDispatch, RootState} from '../../../redux/store';
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
  const dispatch = useDispatch<AppDispatch>();
  const {inProgress} = useSelector((state: RootState) => state.orderReducer);

  useEffect(() => {
    dispatch(getInProgress());
  }, [dispatch]);
  return (
    <View style={styles.tabPage}>
      {inProgress?.map(order => {
        return (
          <ItemListFood
            key={order.id}
            onPress={() => navigation.navigate('OrderDetail', {order})}
            image={{uri: order.food.picturePath}}
            type="in-progress"
            items={order.quantity}
            price={order.total}
            productName={order.food.name}
          />
        );
      })}
    </View>
  );
};

const PastOrders = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch<AppDispatch>();
  const {pastOrders} = useSelector((state: RootState) => state.orderReducer);

  useEffect(() => {
    dispatch(getPastOrders());
  }, [dispatch]);

  type Status =
    | 'CANCELLED'
    | 'DELIVERED'
    | 'SUCCESS'
    | 'PENDING'
    | 'ON_DELIVER';

  return (
    <View style={styles.tabPage}>
      {pastOrders.map(order => {
        return (
          <ItemListFood
            key={order.id}
            onPress={() => navigation.navigate('OrderDetail', {order})}
            image={{uri: order.food.picturePath}}
            type="past-orders"
            items={order.quantity}
            price={order.total}
            productName={order.food.name}
            date={order.created_at}
            status={order.status as Status}
          />
        );
      })}
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
