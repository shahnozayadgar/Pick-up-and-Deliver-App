import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectService } from '../../features/serviceSlice';
import { XCircleIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import Map from '../components/Map';
import MapView, {Marker} from 'react-native-maps';
import tw from '../../tailwind.config';

const TrackOrderScreen = () => {
  const navigation = useNavigation();
  const service = useSelector(selectService);

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <SafeAreaView style={{ zIndex: 10 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <XCircleIcon color="#54A6FF" size={30} style={{padding: 20}} />
          </TouchableOpacity>
          <Text style={{ color: '#54A6FF', fontSize: 16, padding: 20}}>Order Help</Text>
      </View>

      <View style={{backgroundColor: '#54A6FF', marginHorizontal: 5, marginVertical: 2, borderRadius: 8, padding: 24, zIndex: 50, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.2, elevation: 3}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold', paddingBottom: 10}}>Estimated Service Time</Text>
              <Text style={{fontSize: 30, fontWeight: 'bold'}}>45-55 Minutes</Text>
            </View>
            <Image
              source={{ uri: "https://media2.giphy.com/media/s8XepMSsYkvlvXTKKd/giphy.gif?cid=ecf05e47u6z5pd8fscuv0xtz6pdnwve4olvsqpwkbrvn3gl6&ep=v1_stickers_search&rid=giphy.gif&ct=s" }}
              style={{height: 100, width: 100}}
            />
          </View>
          <Progress.Bar style={{ height: 6 }} color="white" indeterminate={true} />
          <Text style={{ marginTop: 10, color: 'white' }}>
            Hurray! your order at {service.title} is in progress!
          </Text>
        </View>
      </SafeAreaView>
      
      <MapView 
      style={{ flex: 1, marginTop: -10, zIndex: 0 }}
      mapType="mutedStandard"
        initialRegion={{
          latitude: 37.4982,
          longitude: 127.0286,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      
      />
    </View>
  )
}

export default TrackOrderScreen