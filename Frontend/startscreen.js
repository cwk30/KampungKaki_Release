import { NavigationHelpersContext } from '@react-navigation/native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './Screens/Main';



const storeData = async (value,navigate) => {

   try {
     await AsyncStorage.setItem('cookie', value)
   } catch (e) {
     // saving error
   }
 }

const getData = async () => {
   try {
     const value = await AsyncStorage.getItem('cookie')
     if(value !== null) {
        return value    
     }
   } catch(e) {
     // error reading value
   }
 }
class Inputs extends Component {
   state = {
      email: '',
      password: ''
   }
   
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   //https://ad403e0e242b.ngrok.io/getchat?cookie=lgPn3k7vYXTo
   /*login = async (email, pass) => {
      fetch("https://ad403e0e242b.ngrok.io/login?phone="+email+"&password="+pass,{mode: 'cors', method: "GET"}).then(response => response.text()).then((body)=>{storeData(body);});
      const stuff = await getData()
      if (stuff == 'Error') {
        this.props.navigation.push('startscreen');
      }
      else {
        this.props.navigation.push('BottomNavigator');
      }} */
   
   render() {
      return (
         <View style = {styles.container}>
           <Image style={{height:100, width:200, marginTop:50, borderRadius: 15}} source={require('./assets/styles/KampungKaki.jpg')}/>
            <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Email"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Password"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {this.handlePassword}/>
            <View style={{ flexDirection: "row",justifyContent:'center'}}>
                <TouchableOpacity
                style = {styles.submitButton}
                onPress = {
                    () => this.props.navigation.navigate('BottomNavigator')}
                >
              <Text style = {styles.submitButtonText}> Login </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.submitButton}
                onPress = {() => this.props.navigation.navigate('signup')}
                >
              <Text style = {styles.submitButtonText}> Sign up </Text>
                </TouchableOpacity>
            </View>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      marginTop: 80,
      justifyContent:'center',
      alignItems:'center',
   },
   input: {
      marginTop: 50,
      height: 60,
      width:'70%',
      borderColor: '#7a42f4',
      borderWidth: 1,
      fontSize: 20,
   
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 20,
      marginTop : 80,
      marginHorizontal: 20,
      height: 60,
   },
   submitButtonText:{
      color: 'white'
   }
})