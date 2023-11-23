import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, {useEffect, useLayoutEffect} from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { urlFor } from '../../sanity';
import {
    ArrowLeftIcon,
    StarIcon,
    ChevronRightIcon,
  } from "react-native-heroicons/solid";
import ServicesRow from '../components/ServicesRow';
import BasketBar from '../components/BasketBar';
import { setService } from '../../features/serviceSlice';
import { useDispatch } from 'react-redux';

const ServiceScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {
        params: {
            id, 
            imgUrl, 
            title, 
            rating,
            short_description,
            long_description,
            services, 

        },
    } = useRoute();

    useEffect(() => {
      dispatch(
        setService ({
            id, 
            imgUrl, 
            title, 
            rating,
            short_description,
            long_description,
            services, 

        })
      );
    }, [dispatch]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])




  return (
    <>
    <BasketBar />
    <ScrollView>
  <View style={{ position: 'relative' }}>
    <Image
      source={{
        uri: urlFor(imgUrl).url(),
      }}
      style={{
        width: '100%',
        height: 272,
        backgroundColor: '#ccc',
        padding: 4,
      }}
    />
    <TouchableOpacity
      onPress={navigation.goBack}
      style={{
        position: 'absolute',
        top: 14,
        left: 5,
        padding: 2,
        backgroundColor: '#f0f0f0',
        borderRadius: 999, // large enough to make it a circle
      }}
    >
        <ArrowLeftIcon size={22} color="#00CCBB" />
    </TouchableOpacity>
  </View>

  <View style={{ backgroundColor: 'white', paddingVertical: 4, paddingHorizontal: 4 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', paddingLeft: 16, paddingTop: 16 }}>{title}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 1, paddingLeft: 16, paddingTop: 6}}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 16, color: 'gray', paddingRight: 10 }}>{short_description}</Text>
          <StarIcon color="#54A6FF" opacity={0.5} size={22} style={{ marginLeft: 2 }} />
          <Text style={{ fontSize: 12, color: 'gray', marginLeft: 2 }}>
            <Text style={{ color: '#54A6FF' }}>{rating}</Text>
          </Text>
        </View>
  
      </View>
      <View style={{borderBottomWidth: 0.5, borderBottomColor: '#8C91A3', paddingBottom: 8 }}>
        <Text style={{ paddingLeft: 16, paddingTop: 24, fontWeight: 'bold', fontSize: 16 }}>Description</Text>
      </View>
      <Text style={{ padding: 16, paddingTop: 2, color: 'gray', marginTop: 20, paddingBottom: 20, fontSize: 16 }}>{long_description}</Text>
    </View>

    <View style={{borderBottomWidth: 0.5, borderBottomColor: '#8C91A3', paddingBottom: 70 }}>
      <Text style={{ paddingLeft: 16, paddingTop: 24, paddingBottom: 10, fontWeight: 'bold', fontSize: 16 }}>Add Options</Text>

      {/* Services */}
      {services.map((services) => (
      <ServicesRow 
        key={services._id}
        id={services._id}
        name={services.name}
        description={services.short_description}
        price={services.price}      
      />

      ))}
    </View>
</ScrollView>
</>
  )
}

export default ServiceScreen