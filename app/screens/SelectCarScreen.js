import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectService } from '../../features/serviceSlice';
import { SelectList } from 'react-native-dropdown-select-list';
import {
    basketItems,
    removeFromBasket,
    selectBasketTotal,
  } from "../../features/basketSlice";
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XCircleIcon, ChevronDownIcon } from "react-native-heroicons/solid";
import { useState } from 'react';
import { useMemo } from 'react';
import {Picker} from '@react-native-picker/picker';
import { CheckBox } from 'react-native-elements'
import DatePicker from 'react-native-modern-datepicker'

const SelectScreen = () => {
    const [isChecked, setIsChecked] = useState(false);
    const navigation = useNavigation();
    const service = useSelector(selectService);
    const items = useSelector(basketItems);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [groupedItemsInBasket, setGroupedItemsInBasker] = useState([]);
    const dispatch = useDispatch();
    const basketTotal = useSelector(selectBasketTotal);
    const [selected, setSelected] = React.useState("");
    const data = [
        {key: '1', value:'Hyundai'},
        {key: '2', value:'Kia'},
        {key: '3', value:'Genesis'},
        {key: '4', value:'Peugeot'},
    ]
    const [selectedTime, setSelectedTime] = React.useState("");
    const dataTime = [
        {key: '1', value:'Santa Fe'},
        {key: '2', value:'Tucson'},
        {key: '3', value:'Kona'},
        {key: '4', value:'Palisade'},
        {key: '4', value:'Venue'},
        {key: '4', value:'Nexo'},
        {key: '4', value:'Ioniq 5'},
    
    ]
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(false);

    const handleOnPress = () => {
        setOpen(!open);
    }
    
    const handleChange = (propDate) => {
        setDate(propDate);
    };

    const [carPlateNumber, setCarPlateNumber] = React.useState("");




    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
          (results[item.id] = results[item.id] || []).push(item);
          return results;
        }, {});
        setGroupedItemsInBasker(groupedItems);
    }, [items]);

    const handleCheckboxPress = () => {
        setIsChecked(!isChecked);
    }

  return (
    <SafeAreaView style={[StyleSheet.container, { flex: 1, backgroundColor: 'white' }]}>
      <View style={{ flex: 1, backgroundColor: '#E5E7EB' }}>
        <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#54A6FF', backgroundColor: 'white', shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.2, elevation: 3 }}>
            <View>
                <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', paddingBottom: 5 }}>Select Your Car</Text>
                <Text style={{ color: '#7C7C7C', textAlign: 'center' }}>{service.title}</Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ borderRadius: 999, backgroundColor: '#f0f0f0', position: 'absolute', top: 3, right: 5 }}
            >
                <XCircleIcon color="#54A6FF" height={50} width={50} />
            </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 12, backgroundColor: 'white', marginVertical: 5 }}>
      <Image
        source={{
          uri: 'https://links.papareact.com/wru',
        }}
        style={{ width: 28, height: 28, backgroundColor: '#ccc', borderRadius: 14, padding: 4 }}
      />
      <Text style={{ flex: 1, paddingLeft: 10 }}>Pick up in 50-70 mins</Text>
      <TouchableOpacity>
        <Text style={{ color: '#54A6FF' }}>Change</Text>
      </TouchableOpacity>
    </View>

    <ScrollView style={{ borderTopWidth: 1, borderTopColor: '#ccc' }}>
        <View style={{paddingHorizontal: 20, paddingVertical: 26, flex: 1, backgroundColor: 'white'}}>
        <Text style={{paddingBottom: 16}}>Select Brand</Text>
        <SelectList data={data} setSelected={setSelected}></SelectList>
        </View>

        <View style={{paddingHorizontal: 20, paddingVertical: 26, flex: 1, backgroundColor: 'white'}}>
        <Text style={{paddingBottom: 16}}>Select Model</Text>
        <SelectList data={dataTime} setSelected={setSelectedTime}></SelectList>
        </View>


        <View style={{ paddingHorizontal: 20, paddingVertical: 20, flex: 1, backgroundColor: 'white' }}>
        <Text style={{ paddingBottom: 16 }}>Car Plate Number</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16, paddingHorizontal: 10 }}
          placeholder="Enter car plate number"
          value={carPlateNumber}
          onChangeText={(text) => setCarPlateNumber(text)}
        />
      </View>

    </ScrollView>
   
    <View style={{ padding: 20, backgroundColor: 'white', marginTop: 5, marginBottom: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
            <Text style={{ color: '#7C7C7C' }}>Subtotal</Text>
            <Text style={{ color: '#7C7C7C' }}>
              <Text>{basketTotal}</Text>
            </Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
            <Text style={{ color: '#7C7C7C' }}>Delivery Fee</Text>
            <Text style={{ color: '#7C7C7C' }}>
              <Text>{5.99}</Text>
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, paddingBottom: 15 }}>
            <Text>Order total</Text>
            <Text style={{ color: 'black', fontWeight: 'bold' }}>
              <Text>{basketTotal + 5.99}</Text>
            </Text>
          </View>
          

          <TouchableOpacity
            onPress={() => navigation.navigate("PreparingOrderScreen")}
            style={{ borderRadius: 8, backgroundColor: '#54A6FF', padding: 16 }}
          >
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>
              Place Order
            </Text>
          </TouchableOpacity>
    </View>   
    
      </View>
    </SafeAreaView>
  )

}

export default SelectScreen;