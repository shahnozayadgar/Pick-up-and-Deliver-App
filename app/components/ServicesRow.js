import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { CheckBox } from 'react-native-elements'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../../features/basketSlice'
import { removeFromBasket } from '../../features/basketSlice'

const ServicesRow = ({id, name, description, price}) => {
    const [isChecked, setIsChecked] = useState(false);
    const dispatch = useDispatch();

    const handleCheckboxPress = () => {
      setIsChecked(!isChecked);
  
      if (!isChecked) {
        // If the checkbox was unchecked, add the item to the basket
        dispatch(addToBasket({ id, name, description, price }));
      } else {
        // If the checkbox was checked, remove the item from the basket
        dispatch(removeFromBasket({ id }));
      }
    };
  
  return (
    <TouchableOpacity style={{ backgroundColor: 'white', borderWidth: 1, borderColor: '#ccc', padding: 16 }}>
      <View style={{ flexDirection: 'row' }}>
      <CheckBox
        checked={isChecked}
        onPress={handleCheckboxPress}
        containerStyle={{ marginRight: 8 }}
      />
      <View style={{ flex: 1, paddingRight: 8 }}>
        <Text style={{ fontSize: 16, marginBottom: 4 }}>{name}</Text>
        <View></View>
        <Text style={{ color: '#7C7C7C' }}>{description}</Text>
        <Text style={{ color: '#7C7C7C', marginTop: 4, fontWeight: 'bold' }}>
        ${price}
        </Text>
      </View>
    </View>
    </TouchableOpacity>
  )
}

export default ServicesRow