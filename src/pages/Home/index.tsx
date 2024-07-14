import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Gs} from '../../assets/Styles/GlobalStyle';
import {FoodCard, Gap, HomeProfile, HomeTabSection} from '../../components';
import {getFoodData} from '../../redux/action';
import {AppDispatch, RootState} from '../../redux/store';
import {FoodItem} from '../../types';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {food} = useSelector((state: RootState) => state.homeReducer);
  useEffect(() => {
    dispatch(getFoodData());
  }, [dispatch]);
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.page}>
        <HomeProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foodCardContainer}>
              <Gap width={24} />
              {food.map((item: FoodItem, index: number) => {
                return (
                  <FoodCard
                    name={item.name}
                    image={{uri: item?.picturePath}}
                    key={index}
                    rating={parseInt(item.rate, 10)}
                  />
                );
              })}
            </View>
          </ScrollView>
        </View>
        <View style={styles.tabContainer}>
          <HomeTabSection />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1},
  foodCardContainer: {
    ...Gs.flexRow,
    marginVertical: 12,
  },
  tabContainer: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
});
