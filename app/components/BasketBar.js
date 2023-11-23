import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {useSelector} from "react-redux"
import { useNavigation } from '@react-navigation/native'
import { basketItems, selectBasketTotal } from "../../features/basketSlice";

const BasketBar = () => {
  const items = useSelector(basketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) return null;

  return (
<View style={{ position: 'absolute', bottom: 10, width: '100%', zIndex: 50 }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('BasketScreen')}
        style={{
          backgroundColor: '#34ABEF',
          marginHorizontal: 5,
          padding: 16,
          borderRadius: 8,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, backgroundColor: '#34ABEF', paddingVertical: 1, paddingHorizontal: 2 }}>
          {items.length}
        </Text>
        <Text style={{ flex: 1, color: 'white', fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>
          Continue
        </Text>
        <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>
          <Text>{basketTotal}</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default BasketBar;