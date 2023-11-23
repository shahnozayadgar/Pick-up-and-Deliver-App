import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const IntroScreen = () => {
  const navigation = useNavigation(); // Add this line to get the navigation object

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animatable.Image
        source={require("../../assets/car.jpg")}
        animation="slideInUp"
        iterationCount={1}
        style={{ height: 370, width: 370, resizeMode: 'contain' }}
      />

      <Animatable.Text 
        animation="slideInUp"
        iterationCount={1}
        style={{ fontSize: 32, color: '#54A6FF', fontWeight: 'bold', textAlign: 'left', paddingHorizontal: 20, paddingBottom: 20}}
      >
        The Best Platform for Car Pick-up and Delivery
      </Animatable.Text>

      <Animatable.Text 
        animation="slideInUp"
        iterationCount={1}
        style={{ fontSize: 15, color: '#54A6FF', textAlign: 'left', paddingBottom: 200, paddingHorizontal: 20 }}
      >
            With just a few taps, you can schedule a wide range of services, from regular maintenance to car wash appointments. We make car services easy and convenient.       </Animatable.Text>

      <Animatable.View
        animation="slideInUp"
        iterationCount={1}
        style={{ borderRadius: 8, backgroundColor: '#54A6FF', paddingVertical: 16, paddingHorizontal: 150 }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>
            Continue
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default IntroScreen;
