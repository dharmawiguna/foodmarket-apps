import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../assets/Styles/Colors';
import {Gs} from '../../assets/Styles/GlobalStyle';
import {Button, Header, ItemListFood, ItemValue} from '../../components';
import CurrencyFormat from '../../components/molecules/Number';

interface OrderSummaryProps {
  navigation: any;
  route: any;
}

export function OrderSummary({
  navigation,
  route,
}: OrderSummaryProps): JSX.Element {
  const {item, transaction, userProfile} = route.params;
  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Header title="Payment" subtitle="You Deserve Better Meal" onBack />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood
          type="order-summary"
          productName={item.name}
          price={item.price}
          items={transaction.totalItem}
          image={{uri: item.picturePath}}
        />
        <Text style={styles.label}>Details Transaction</Text>
        <ItemValue
          label={item.name}
          value={`IDR ${CurrencyFormat(transaction.totalPrice)}`}
        />
        <ItemValue
          label="Driver"
          value={`IDR ${CurrencyFormat(transaction.driver)}`}
        />
        <ItemValue
          label="Tax 10%"
          value={`IDR ${CurrencyFormat(transaction.tax)}`}
        />
        <ItemValue
          label="Total Price"
          value={`IDR ${CurrencyFormat(transaction.total)}`}
          valueColor
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Delivere To</Text>
        <ItemValue label="Name" value={userProfile.name} />
        <ItemValue label="Phone No." value={userProfile.phoneNumber} />
        <ItemValue label="Address" value={userProfile.address} />
        <ItemValue label="House No" value={userProfile.houseNumber} />
        <ItemValue label="City" value={userProfile.city} />
      </View>
      <View style={styles.footer}>
        <Button
          title="Checkout Now"
          onPress={() => navigation.replace('SuccessOrder')}
        />
      </View>
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
