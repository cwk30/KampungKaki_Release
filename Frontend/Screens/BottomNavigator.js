import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../consts/colors';
import {View} from 'react-native';
import Main from './Main';
import CartScreen from '../CartScreen';
import TompangMain from './TompangMain';
import ChatScreen from './ChatScreen';
import GroceryScreen from './GroceryScreen';
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: false,
        activeTintColor: COLORS.primary,
      }}>
      <Tab.Screen
        name="Food"
        component={Main}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="fastfood" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Grocery"
        component={GroceryScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon1 name="fruit-citrus" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({color}) => (
            <View
              style={{
                height: 60,
                width: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.white,
                borderColor: COLORS.primary,
                borderWidth: 2,
                borderRadius: 30,
                top: -25,
                elevation: 5,
              }}>
              <Icon name="chat" color={COLORS.primary} size={28} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Tompang La!"
        component={TompangMain}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="hail" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="shopping-cart" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;