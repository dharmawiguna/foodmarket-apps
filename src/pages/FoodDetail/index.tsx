import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IcBackWhite} from '../../assets';
import {colors} from '../../assets/Styles/Colors';
import {Gs} from '../../assets/Styles/GlobalStyle';
import {Button, Counter, Rating} from '../../components';
import CurrencyFormat from '../../components/molecules/Number';
import {getData} from '../../utils';

interface FoodDetailProps {
  navigation: any;
  route: any;
}

export function FoodDetail({navigation, route}: FoodDetailProps): JSX.Element {
  const {id, name, picturePath, description, ingredients, rate, price} =
    route?.params.item;

  const [totalItem, setTotalItem] = useState<number>(1);
  const [userProfile, setUserProfile] = useState<Record<string, any>>({});

  useEffect(() => {
    getData('userProfile').then((res: any) => {
      setUserProfile(res);
    });
  }, []);

  const onCounterChange = (value: number) => {
    setTotalItem(value);
  };

  const onOrder = () => {
    const totalPrice = totalItem * price;
    const driver = 50000;
    const tax = (10 / 100) * totalPrice;
    const total = totalPrice + driver + tax;

    const data = {
      item: {
        id,
        name,
        price,
        picturePath,
      },
      transaction: {
        totalItem,
        totalPrice,
        driver,
        tax,
        total,
      },
      userProfile,
    };

    navigation.navigate('OrderSummary', data);
  };

  return (
    <View style={styles.page}>
      <ImageBackground source={{uri: picturePath}} style={styles.imageCover}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.foodName}>{name}</Text>
              <Rating rating={rate} />
            </View>
            <Counter onValueChange={onCounterChange} />
          </View>
          <Text style={styles.foodDesc}>{description}</Text>
          <Text style={styles.foodLabel}>Ingredients</Text>
          <Text style={styles.foodDesc}>{ingredients}</Text>
        </View>
        <View style={styles.foodFooter}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Price:</Text>
            <Text style={styles.priceTotal}>
              IDR {CurrencyFormat(totalItem * price)}
            </Text>
          </View>
          <View style={styles.button}>
            <Button title="Order Now" onPress={onOrder} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
  },
  imageCover: {
    height: 330,
    paddingTop: 50,
    paddingLeft: 22,
  },
  backIcon: {
    width: 30,
    height: 30,
    ...Gs.justifyCenter,
    ...Gs.itemsCenter,
  },
  content: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -40,
    backgroundColor: colors.white,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
  },
  foodName: {
    fontSize: 16,
    fontWeight: 500,
    color: colors.black,
    marginBottom: 8,
  },
  productContainer: {
    ...Gs.flexRow,
    ...Gs.justifyBetween,
    ...Gs.itemsCenter,
    marginBottom: 14,
  },
  foodDesc: {
    fontSize: 14,
    fontWeight: 500,
    color: colors.grey,
    marginBottom: 16,
  },
  foodLabel: {
    fontSize: 14,
    fontWeight: 500,
    color: colors.black,
    marginBottom: 4,
  },
  foodFooter: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    paddingTop: 16,
    paddingBottom: 35,
  },
  priceContainer: {
    flex: 1,
  },
  button: {
    width: 163,
  },
  labelTotal: {
    fontSize: 13,
    fontWeight: 500,
    color: colors.grey,
  },
  priceTotal: {
    fontSize: 18,
    fontWeight: 500,
    color: colors.black,
  },
});
