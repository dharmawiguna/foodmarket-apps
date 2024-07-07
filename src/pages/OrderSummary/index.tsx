import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Header, ItemListFood, ItemValue} from '../../components';
import {FoodDummy1} from '../../assets/Dummy';
import {Gs} from '../../assets/Styles/GlobalStyle';
import {colors} from '../../assets/Styles/Colors';

interface OrderSummaryProps {
  navigation: any;
}

export function OrderSummary({navigation}: OrderSummaryProps): JSX.Element {
  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Header title="Payment" subtitle="You Deserve Better Meal" onBack />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood
          type="order-summary"
          productName="Soup Buntut"
          price={1209000}
          items="14"
          image={FoodDummy1}
        />
        <Text style={styles.label}>Details Transaction</Text>
        <ItemValue label="Cherry Healthy" value="IDR 400.000" />
        <ItemValue label="Driver" value="IDR 500.000" />
        <ItemValue label="Tax 10%" value="IDR 50.000" />
        <ItemValue label="Total Price" value="IDR 950.000" valueColor />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Delivere To</Text>
        <ItemValue label="Name" value="Dharma Wiguna" />
        <ItemValue label="Phone No." value="0912312323" />
        <ItemValue label="Address" value="Kesiman" />
        <ItemValue label="House No" value="5" />
        <ItemValue label="City" value="Denpasar" />
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
