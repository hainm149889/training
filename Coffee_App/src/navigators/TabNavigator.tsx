/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Cart, Favorites, HomeScreen, OrderHistory} from '../screens';
import {styles} from './style';
import {BlurView} from '@react-native-community/blur';
import CustomIcon from '../components/custom-icon';
import {COLORS} from '../theme';

const Tab = createBottomTabNavigator();

const TabBarIcon = ({focused, name}: {focused: boolean; name: string}) => {
  return (
    <CustomIcon
      size={25}
      name={name}
      color={focused ? COLORS.primaryOrangeHex : COLORS.primaryBlackHex}
    />
  );
};

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabbarStyle,
        tabBarBackground: () => {
          return (
            <BlurView overlayColor="" blurAmount={15} style={styles.blurView} />
          );
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} name="home" />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} name="cart" />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} name="like" />
          ),
        }}
      />
      <Tab.Screen
        name="OrderHistory"
        component={OrderHistory}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} name="bell" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
