import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../../sanity'
import { useNavigation } from '@react-navigation/native'


const ServiceCard = ({
    id, 
    imgUrl, 
    title, 
    rating,
    short_description,
    long_description, 
    services

}) => {

  const navigation = useNavigation();


  return (
    <TouchableOpacity
    onPress={() => {
      navigation.navigate("ServiceScreen", {
        id, 
        imgUrl, 
        title, 
        rating,
        short_description,
        long_description,
        services

      });
    }}
     style={{backgroundColor: 'white', marginRight: 12, elevation: 2}}>
        <Image 
            source={{
                uri: urlFor(imgUrl).url(),
            }}
            style={{height: 272, width: 297, borderTopLeftRadius: 6, borderTopRightRadius: 6  }}
        />
    <View style={{paddingHorizontal: 3, paddingBottom: 20, paddingTop: 20, paddingLeft: 10, paddingRight: 10}}>
      <Text style={{fontWeight: 'bold', fontSize: 20, paddingBottom: 6}}>{title}</Text>
      
      <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 1}}>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#808080', paddingBottom: 6}}>
            <Text>{rating}</Text>  {short_description}
        </Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 1, width: 280 }}>
      <Text style={{ fontSize: 12, color: '#808080', flexWrap: 'wrap' }} numberOfLines={3}>
        {long_description}
      </Text>
      </View>     
    </View>
    </TouchableOpacity>

  )
}

export default ServiceCard