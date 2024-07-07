import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../assets/Styles/Colors';
import {Gs} from '../../../assets/Styles/GlobalStyle';
import {Rating} from '../Rating';

type ItemType = 'product' | 'order-summary' | 'in-progress' | 'past-orders';

interface ItemListFoodProps {
  image: any;
  onPress?: () => void;
  items?: string;
  rating?: number;
  inProgress?: boolean;
  orderItems?: string;
  totalOrder?: string;
  type: ItemType;
  price?: number;
  productName?: string;
  date?: string;
  status?: string;
}

export default function ItemListFood({
  image,
  onPress,
  rating = 5,
  items,
  price,
  type,
  productName,
  date,
  status,
}: ItemListFoodProps): JSX.Element {
  const renderContent = (value: string) => {
    switch (value) {
      case 'product':
        return (
          <>
            <View style={styles.pageTitle}>
              <Text style={styles.title}>{productName}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Rating rating={rating} />
          </>
        );
      case 'order-summary':
        return (
          <>
            <View style={styles.pageTitle}>
              <Text style={styles.title}>{productName}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Text style={styles.items}>{items} items</Text>
          </>
        );
      case 'in-progress':
        return (
          <>
            <View style={styles.pageTitle}>
              <Text style={styles.title}>{productName}</Text>
              <Text style={styles.items}>
                {items} items . IDR {price}
              </Text>
            </View>
          </>
        );
      case 'past-orders':
        return (
          <>
            <View style={styles.pageTitle}>
              <Text style={styles.title}>{productName}</Text>
              <Text style={styles.items}>
                {items} items . IDR {price}
              </Text>
            </View>
            <View>
              <Text style={styles.date}>{date}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </>
        );
      default:
        return (
          <>
            <View style={styles.pageTitle}>
              <Text style={styles.title}>{productName}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Rating rating={4} />
          </>
        );
    }
  };
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.imageTabContainer}>
        <Image source={image} style={styles.imageTab} />
        {renderContent(type)}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imageTabContainer: {
    ...Gs.flexRow,
    backgroundColor: colors.white,
    paddingVertical: 8,
    ...Gs.itemsCenter,
  },
  imageTab: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
  },
  title: {
    fontSize: 16,
    color: colors.black,
    fontWeight: 300,
  },
  price: {
    fontSize: 13,
    fontWeight: 300,
    color: colors.grey,
  },
  pageTitle: {
    flex: 1,
    padding: 10,
  },
  items: {
    fontSize: 13,
    fontWeight: 300,
    color: colors.grey,
  },
  date: {
    fontSize: 10,
    fontWeight: 300,
    color: colors.grey,
  },
  status: {
    fontSize: 10,
    fontWeight: 300,
    color: '#D9435E',
  },
});
