import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from "react-native-animatable"
import { useNavigation } from '@react-navigation/native'

const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: '#54A6FF', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animatable.Image
      source={require("../../assets/checked-2.png")}
      animation="slideInUp"
      iterationCount={1}
      style={{height: 120, width: 120}}
      />

      <Animatable.Text 
      animation="slideInUp"
      iterationCount={1}
      style={{ fontSize: 24, marginTop: 40, color: 'white', fontWeight: 'bold', textAlign: 'center' }}
>
        Order Succeed
        </Animatable.Text>

        <Animatable.Text 
      animation="slideInUp"
      iterationCount={1}
      style={{ fontSize: 15, color: 'white',  textAlign: 'center', paddingBottom: 100, paddingHorizontal: 80, paddingTop: 16 }}
>
        Your order was successful, view details of your order and track your service
        </Animatable.Text>

        <Animatable.View
        animation="slideInUp"
        iterationCount={1}
        style={{ borderRadius: 8, backgroundColor: 'white', paddingVertical: 16, paddingHorizontal: 120 }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("TrackOrderScreen")}>
          <Text style={{ color: '#54A6FF', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>
            Check My Order
          </Text>
        </TouchableOpacity>
      </Animatable.View>


    </SafeAreaView>
  )
}

export default PreparingOrderScreen