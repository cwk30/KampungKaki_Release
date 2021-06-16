import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CButton = ({text}) => {
    const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.button}
      onPress = {() => navigation.navigate('Request')}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'purple',
    padding: 18,
    width: '46%',
    height: 60,
    margin: 10,
  },
  text: {
    fontSize: 13,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default CButton;