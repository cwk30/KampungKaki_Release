import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Onboard = ({navigation}) => {
    return(
      <View style = {{flex: 1 , alignItems: 'center', justifyContent: 'center'}}>
        <Text> Please Sign In </Text>
      </View>
    );
  }
export default Onboard;
