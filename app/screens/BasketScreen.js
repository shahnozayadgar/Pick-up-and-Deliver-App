import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectService } from '../../features/serviceSlice';
import {
    basketItems,
    removeFromBasket,
    selectBasketTotal,
  } from "../../features/basketSlice";
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XCircleIcon } from "react-native-heroicons/solid";
import { useState } from 'react';
import { useMemo } from 'react';

const BasketScreen = () => {
    const navigation = useNavigation();
    const service = useSelector(selectService);
    const items = useSelector(basketItems);
    const [groupedItemsInBasket, setGroupedItemsInBasker] = useState([]);
    const dispatch = useDispatch();
    const basketTotal = useSelector(selectBasketTotal);

    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
          (results[item.id] = results[item.id] || []).push(item);
          return results;
        }, {});
        setGroupedItemsInBasker(groupedItems);
    }, [items]);
    
    

  return (
    <SafeAreaView style={[StyleSheet.container, { flex: 1, backgroundColor: 'white' }]}>
      <View style={{ flex: 1, backgroundColor: '#E5E7EB' }}>
        <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#54A6FF', backgroundColor: 'white', shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.2, elevation: 3 }}>
            <View>
                <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', paddingBottom: 5 }}>Basket</Text>
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
        <Text style={{ color: '#54A6FF', fontSize: 14 }}>Change</Text>
      </TouchableOpacity>
    </View>

    <ScrollView style={{ borderTopWidth: 1, borderTopColor: '#ccc' }}>
      {Object.entries(groupedItemsInBasket).map(([key, items]) => (
        <View key={key} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', paddingVertical: 20, paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
          <Text style={{ flex: 1 }}>{items[0]?.name}</Text>
          <TouchableOpacity onPress={() => dispatch(removeFromBasket({ id: key }))}>
            <Text style={{ color: '#54A6FF', fontSize: 14 }}>Remove</Text>
          </TouchableOpacity>
        </View>
      ))}
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
            onPress={() => navigation.navigate("SelectScreen")}
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

export default BasketScreen