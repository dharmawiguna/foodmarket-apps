import Axios from 'axios';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {useDispatch} from 'react-redux';
import {colors} from '../../assets/Styles/Colors';
import {Gs} from '../../assets/Styles/GlobalStyle';
import {
  Button,
  Gap,
  Header,
  ItemListFood,
  ItemValue,
  Loading,
} from '../../components';
import CurrencyFormat from '../../components/molecules/Number';
import {setLoading} from '../../redux/action';
import {AppDispatch} from '../../redux/store';
import {getData} from '../../utils';
import constants from '../../utils/constants';

interface OrderSummaryProps {
  navigation: any;
  route: any;
}

export function OrderSummary({
  navigation,
  route,
}: OrderSummaryProps): JSX.Element {
  const {item, transaction, userProfile} = route.params;

  const [isPaymentOpen, setIsPaymentOpen] = useState<boolean>(false);
  const [paymentUrl, setPaymentUrl] = useState<string>('https://google.com');
  const dispatch = useDispatch<AppDispatch>();

  const onCheckout = () => {
    const data = {
      food_id: item.id,
      user_id: userProfile.id,
      quantity: transaction.totalItem,
      total: transaction.total,
      status: 'PENDING',
    };
    getData('token').then(resToken => {
      Axios.post(`${constants.DEFAULT_URL}/checkout`, data, {
        headers: {
          Authorization: resToken.value,
        },
      })
        .then(res => {
          dispatch(setLoading(false));
          setIsPaymentOpen(true);
          setPaymentUrl(res.data.data.payment_url);
        })
        .catch(err => {
          dispatch(setLoading(false));
          console.log('error checkout', err);
        });
    });
    dispatch(setLoading(true));
  };

  interface State {
    url: string;
  }

  const onNavChange = (state: State) => {
    const url = state.url;
    if (url.includes('success')) {
      setTimeout(() => {
        navigation.reset({index: 0, routes: [{name: 'SuccessOrder'}]});
      }, 2500);
    }
  };

  if (isPaymentOpen) {
    return (
      <>
        <Gap height={10} />
        <Header title="Payment" subtitle="You Deserve Better Meal" onBack />
        <WebView
          startInLoadingState={true}
          renderLoading={() => <Loading />}
          source={{
            uri: paymentUrl,
          }}
          onNavigationStateChange={onNavChange}
        />
      </>
    );
  } else {
    return (
      <ScrollView>
        <View style={styles.headerContainer}>
          <Header
            title="Order Summary"
            subtitle="You Deserve Better Meal"
            onBack
          />
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
            // onPress={() => navigation.replace('SuccessOrder')}
            onPress={onCheckout}
          />
        </View>
      </ScrollView>
    );
  }
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
