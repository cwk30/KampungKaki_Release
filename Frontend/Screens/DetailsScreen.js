import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity, TouchableHighlight} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import {SecondaryButton} from '../components/Button';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons';

const DetailsScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <MaterialCommunityIcons name="food-fork-drink" size={24} color="black" style={{marginRight:6}}/>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Hawker for the day</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 250,
          }}>
          <Image source={{uri:'https://www.toilet.org.sg/photos/3S_TekkaCentreMarket_1.jpg'}} style={{height: 180, width: 180, borderRadius:50}} />
        </View>
        <View style={style.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', color: COLORS.white}}>
              Tekka Market
            </Text>
            <View style={style.iconContainer}>
              <Icon name="favorite-border" color={COLORS.primary} size={25} />
            </View>
          </View>
          <Text style={style.detailsText}>
            Tekka Centre is a dining landmark in the Little India neighbourhood, serving up large dishes of fresh food to visitors and locals just steps away from the Little India MRT station. Housed in a colourful warehouse, it has quickly become a hub for those in search of decent food at honest prices.
          </Text>
          <View style={{marginTop: 40, marginBottom: 40, flexDirection: "row",justifyContent:'center'}}>
            <TouchableOpacity
              style = {style.rejectButton}
              >
              <SimpleLineIcons name="arrow-down-circle" size={24} color="white" />
              <Text style = {{fontSize:20, fontWeight:'bold', color:'white'}}> REJECT </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style = {style.voteButton}
              >
              <SimpleLineIcons name="arrow-up-circle" size={24} color="white" />
              <Text style = {{fontSize:20, fontWeight:'bold', color:'white'}}> VOTE </Text>
              </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 60,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.white,
  },
  voteButton:{
    backgroundColor:'#2AAA1B',
    marginLeft:10,
    width:130,
    height:60,
    flexDirection: "row",
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  rejectButton:{
    backgroundColor:'#F41E1E',
    marginLeft:10,
    width:130,
    height:60,
    flexDirection: "row",
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  }
});

export default DetailsScreen;