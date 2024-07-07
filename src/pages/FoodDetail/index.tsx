import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {FoodDummy1} from '../../assets/Dummy';
import {IcBackWhite} from '../../assets';
import {Gs} from '../../assets/Styles/GlobalStyle';
import {Button, Counter, Rating} from '../../components';
import {colors} from '../../assets/Styles/Colors';

interface FoodDetailProps {
  navigation: any;
}

export function FoodDetail({navigation}: FoodDetailProps): JSX.Element {
  return (
    <View style={styles.page}>
      <ImageBackground source={FoodDummy1} style={styles.imageCover}>
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
              <Text style={styles.foodName}>Cherry Healthy</Text>
              <Rating rating={3} />
            </View>
            <Counter />
          </View>
          <Text style={styles.foodDesc}>
            Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
            pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
            teratur.
          </Text>
          <Text style={styles.foodLabel}>Ingredients</Text>
          <Text style={styles.foodDesc}>Seledri, telur, blueberry, madu.</Text>
        </View>
        <View style={styles.foodFooter}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Price:</Text>
            <Text style={styles.priceTotal}>12.000.000</Text>
          </View>
          <View style={styles.button}>
            <Button
              title="Order Now"
              onPress={() => navigation.navigate('OrderSummary')}
            />
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
    fontSize: 13,
    fontWeight: 500,
    color: colors.black,
  },
});
