import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../assets/Styles/Colors';
import {Gs} from '../../assets/Styles/GlobalStyle';
import {Button, Header, ItemListFood, ItemValue} from '../../components';
import CurrencyFormat from '../../components/molecules/Number';
import Axios from 'axios';
import constants from '../../utils/constants';
import {getData} from '../../utils';

interface OrderDetailProps {
  navigation: any;
  route: any;
}

export function OrderDetail({
  route,
  navigation,
}: OrderDetailProps): JSX.Element {
  const order = route.params.order;

  const onCancel = () => {
    const data = {
      status: 'CANCELLED',
    };
    getData('token').then(resToken => {
      Axios.post(`${constants.DEFAULT_URL}/transaction/${order.id}`, data, {
        headers: {
          Authorization: resToken.value,
        },
      })
        .then(res => {
          console.log('cancel ordder', res);
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        })
        .catch(err => {
          console.log('err cancel order', err);
        });
    });
  };

  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Header title="Payment" subtitle="You Deserve Better Meal" onBack />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood
          type="order-summary"
          productName={order.food.name}
          price={order.food.price}
          items={order.quantity}
          image={{uri: order.food.picturePath}}
        />
        <Text style={styles.label}>Details Transaction</Text>
        <ItemValue
          label={order.food.name}
          value={CurrencyFormat(order.food.price * order.quantity)}
          currency
        />
        <ItemValue label="Driver" value="IDR 500.000" />
        <ItemValue
          label="Tax 10%"
          value={CurrencyFormat((10 / 100) * order.total)}
          currency
        />
        <ItemValue
          label="Total Price"
          value={CurrencyFormat(order.total)}
          valueColor
          currency
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Delivere To</Text>
        <ItemValue label="Name" value={order.user.name} />
        <ItemValue label="Phone No." value={order.user.phoneNumber} />
        <ItemValue label="Address" value={order.user.address} />
        <ItemValue label="House No" value={order.user.houseNumber} />
        <ItemValue label="City" value={order.user.city} />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Order Status</Text>
        <ItemValue label={`#${order.id}`} value={order.status} />
      </View>
      {order.status === 'PENDING' && (
        <View style={styles.footer}>
          <Button
            title="Cancel My Order"
            onPress={onCancel}
            color="#D9435E"
            textColor="white"
          />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {paddingTop: 30, backgroundColor: colors.white},
  content: {
    ...Gs.bgWhite,
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: 500,
    color: colors.black,
    marginBottom: 8,
  },
  footer: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
});
