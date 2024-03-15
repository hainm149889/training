import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {Header} from '../../components';
import {useStore} from '../../store/store';
import {COLORS} from '../../theme';
import {getCategoriesCoffee, getCoffeeList} from '../../utils';
import {styles} from './style';

export const HomeScreen = () => {
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeansList = useStore((state: any) => state.BeansList);

  const [categories, setCategories] = useState(getCategoriesCoffee(CoffeeList));
  const [searchText, setSearchText] = useState(undefined);
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories?.[0],
  });
  const [sortedCoffeeList, setSortedCoffeeList] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList),
  );

  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <Header />
      </ScrollView>
    </View>
  );
};
