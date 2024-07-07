import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, OrderTabSection} from '../../components';
import EmptyOrder from '../../components/molecules/EmptyOrder';
import {Gs} from '../../assets/Styles/GlobalStyle';

const Order = () => {
  const [isEmpty] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      {isEmpty ? (
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
