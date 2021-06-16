import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const StartScreen = ({navigation }) => {
    return(
      <View style = {{flex: 1 , alignItems: 'center', justifyContent: 'center'}}>
        <Text> Please Input Your Details here </Text>
        <Button 
          title = 'Done Registering!'
          onPress ={() => navigation.navigate('Main')} /> 

        <Button 
            tile = 'I have an Account'
            onPress = {() => navigation.goBack('StartScreen')}/>
      </View>
    )
  }
export default StartScreen;