import { NavigationHelpersContext } from '@react-navigation/native';
import React from 'react';
import { Text, SafeAreaView, StatusBar, StyleSheet, View, FlatList, Button, TouchableOpacity } from 'react-native';
import CButton from '../components/CButton';
import DButton from '../components/DButton';

const DATA = [
  {
    id: '123',
    title: 'Mary\n Chicken Rice \n ABC Market ',
  },
  {
    id: '125',
    title: 'John\n Hokkien Mee\n ABC Market',
  },
  { 
    id: '126',
    title: 'Paul\n Fish Porridge\n ABC Market',
  } 
];

const DATA2 = [
  {
    id: '1',
    title: 'Alex',
    score: '85',
  },
  {
    id: '2',
    title: 'James',
    score: '70',
  },
  { 
    id: '3',
    title: 'Cheryl',
    score: '60',
  },
];

const Item = ({ title }) => (
  <View style={styles.parent}>
    <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Accept Request</Text>
      </TouchableOpacity>
  </View>
);

const Item2 = ({ title }) => (
  <View style={styles.parent}>
    <Text style={{fontWeight:'bold',fontSize:20}}>{title}</Text>
  </View>
);

const Item3 = ({ title }) => (
  <View style={styles.parent}>
    <Text style={{fontWeight:'bold',fontSize:15}}>{title}</Text>
  </View>
);


const App = (navigation) => {

  const renderItem = ({ item }) => (
      <Item title={item.title} />
    );
  const renderItem2 = ({ item }) => (<>
      <Item2 title={item.title}/>
      <Item3 title={item.score}/>
    </>);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.requesttext}> Tompang pls! </Text>
        <View style={styles.parent}>
          <CButton text={'Request'} />
          <DButton text={'Offer'} />
        </View>
      </View>
      <SafeAreaView style={styles.container1}>
      <Text style={styles.requesttext}> Requests </Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </SafeAreaView>

      <SafeAreaView style={styles.container2}>
      <Text style={styles.requesttext}> Leadership Board </Text>
      <FlatList
        data={DATA2}
        renderItem={renderItem2}
        keyExtractor={item2 => item2.id}
      />
      </SafeAreaView>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    borderRadius: 10,
    marginTop: 50,
    marginBottom: 20,
  },
  titleContainer: {
    backgroundColor:'orange',
    padding: 50,
    margin: 50,
    marginTop: 10,
    marginBottom: 50,
    flex: 3,
    justifyContent: "center",
    alignItems:"center",
    borderRadius: 20,
  },
  parent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  container1: {
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'lightgrey',
    padding: 50,
    margin: 50,
    marginTop: 10,
    marginBottom: 50,
    flex: 3,
    justifyContent: "center",
    alignItems:"center",
    borderRadius: 20,
  },
  container2: {
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'lightgrey',
    padding: 50,
    margin: 50,
    marginTop: 10,
    marginBottom: 50,
    flex: 3,
    justifyContent: "center",
    alignItems:"center",
    borderRadius: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 18,
  },
  title: {
    fontSize: 16,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    margin: 5,

  },
  requesttext: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    margin: 5,
    marginBottom:15,
  },
  text: {
    backgroundColor: "orange",
    fontSize: 16,
    color: "Black",
    fontWeight: "bold",
    padding: 18,
    textAlign: "center",
  },
  button: {
    backgroundColor: 'lightgrey',
    flexDirecton: 'row',
    width: '46%',
    marginBottom:40,
    height: 60,
  },
  parent1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    textAlign: "center",
    marginBottom:20,
  },
  miniContainer:{

  }
});

export default App;