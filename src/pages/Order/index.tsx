import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Gs} from '../../assets/Styles/GlobalStyle';
import {Header, OrderTabSection} from '../../components';
import EmptyOrder from '../../components/molecules/EmptyOrder';
import {getOrders} from '../../redux/action';
import {AppDispatch, RootState} from '../../redux/store';

const Order = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {orders} = useSelector((state: RootState) => state.orderReducer);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  useEffect(() => {}, [orders]);
  return (
    <View style={styles.container}>
      {orders?.length < 1 ? (
        <EmptyOrder />
      ) : (
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <Header title="Your orders" subtitle="Wait for the best meal" />
          </View>
          <View style={styles.tabContainer}>
            <OrderTabSection />
          </View>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  contentHeader: {
    paddingTop: 30,
    ...Gs.bgWhite,
  },
  tabContainer: {
    flex: 1,
    marginTop: 24,
  },
});
