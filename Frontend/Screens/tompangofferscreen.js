import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Constants from 'expo-constants';
export default function AddScreen({ route, navigation }) {

const [text, setText] = useState("");
const textAlignments = ["auto", "left", "right", "center", "justify"];

  return (
    <View style={{ flex:1, alignItems: "center", justifyContent: "center"}}>
      <Text style={styles.labelmain}>Tompang Offer</Text> 
      <Text style={styles.label}>E.g. Hi I am at ABC Hawker now.{'\n'}Let me know if you need me to help dabao!</Text>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={(newText) => setText(newText)}
    ></TextInput>
    <View style={styles.buttons}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[styles.button, styles.submitButton]}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[styles.button, styles.cancelButton]}
      >
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  labelmain: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 80,
  },
  label: {
    fontSize: 12,
    marginLeft: -30,
    color: "grey",
    marginBottom: -10,
  },
  textInput: {
    margin: 20,
    borderWidth: 1,
    height: 100,
    width: "80%",
    padding: 10,
    borderColor: "#ccc",
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
      padding: 10,
      margin: 5,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
  submitButton: {
    backgroundColor: "orange",
  },
  cancelButton: {
    backgroundColor:"red",
  },
});
