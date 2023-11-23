import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
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
        {key: '1', value:'Nonhyeon-dong'},
        {key: '2', value:'Yeoksam-dong'},
        {key: '3', value:'Sinsa-dong'},
        {key: '4', value:'Seocho-dong'},
        {key: '5', value:'Daechi-dong'},
        {key: '6', value:'Samseong-dong'},
        {key: '7', value:'Dogok-dong Plus'},
        {key: '7', value:'KAIST Seoul Campus'},
    ]
    const [selectedTime, setSelectedTime] = React.useState("");
    const dataTime = [
        {key: '1', value:'10:00 am'},
        {key: '2', value:'11:00 am'},
        {key: '3', value:'12:00 pm'},
        {key: '4', value:'13:00 pm'},
        {key: '4', value:'14:00 pm'},
        {key: '4', value:'15:00 pm'},
        {key: '4', value:'16:00 pm'},
        {key: '4', value:'17:00 pm'},
    
    ]
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(null);

    const handleOnPress = () => {
        setOpen(!open);
    }
    
    const handleChange = (propDate) => {
        setDate(propDate);
    };




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
                <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', paddingBottom: 5 }}>Select Time & Date</Text>
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
        <Text style={{paddingBottom: 16}}>Pick-up Location</Text>
        <SelectList data={data} setSelected={setSelected}></SelectList>
        </View>

        <View style={{paddingHorizontal: 20, paddingVertical: 26, flex: 1, backgroundColor: 'white'}}>
        <Text style={{paddingBottom: 16}}>Drop-off Location</Text>
        <SelectList data={data} setSelected={setSelected}></SelectList>

        
        <View style={{ flexDirection: 'row' }}>
        <CheckBox
        checked={isChecked}
        onPress={handleCheckboxPress}
        containerStyle={{ marginRight: 0 }}
      />
      <Text style={{paddingTop: 18}}>Same location as Pickup</Text>
        </View>
        </View>

        <View style={{paddingHorizontal: 20, paddingVertical: 20, flex: 1, backgroundColor: 'white'}}>
        <Text style={{paddingBottom: 16}}>Pick-up Time</Text>
        <SelectList data={dataTime} setSelected={setSelectedTime}></SelectList>
        </View>


        <TouchableOpacity style={{padding: 20, backgroundColor: 'white'}} onPress={handleOnPress}>
            <Text>Select Time slot</Text>
        </TouchableOpacity>

        {open && (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 22, backgroundColor: 'white'}}>
            <View style={{margin: 20, backgroundColor: 'white', borderRadius: 20, width: '90%', padding: 35, alignItems: 'center', shadowColor: '#000', shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5, backgroundColor: 'white'}}>
            <DatePicker mode='calendar' selected={date} onDateChanged={handleChange}></DatePicker>
            <TouchableOpacity onPress={handleOnPress}>
                <Text>Close</Text>
            </TouchableOpacity>
            </View>
        </View>
        )}
        
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
            onPress={() => navigation.navigate("SelectCarScreen")}
            style={{ borderRadius: 8, backgroundColor: '#54A6FF', padding: 16 }}
          >
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>
              Continue
            </Text>
          </TouchableOpacity>
    </View>   
    
      </View>
    </SafeAreaView>
  )

}

export default SelectScreen;