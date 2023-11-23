import { View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import FeaturedRow from '../components/FeaturedRow';
import ShopsRow from '../components/ShopsRow';
import { useEffect } from 'react';
import { client } from "../../sanity";
import {
  UserIcon,
  SearchIcon, 
  AdjustmentsIcon,
} from "react-native-heroicons/outline";

function HomeScreen() {
  const [featuredCategories, setFeaturedCategories] = React.useState([]);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client
      .fetch(
        `
          *[_type == "featured"]{
            ...,
            service[]->{
              ...,
              services[]->,
        
      },
      }`
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: 'white', paddingTop: 5 }}>
      {/*Header*/}
      <View style={{ flexDirection: 'row', padding: 10, paddingLeft: 20, paddingRight: 20, paddingBottom: 10, alignItems: 'center', marginHorizontal: 4 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#54A6FF' }}>
              Hello User
            </Text>
          </View>
          <UserIcon size={25} color='#54A6FF' />
      </View>

        {/*Search*/}
        <View style={{ flexDirection: 'row', padding: 10, paddingLeft: 20, paddingRight: 20, alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', backgroundColor: 'white', borderColor: 'gray', borderWidth: 1, padding: 10, borderRadius: 5 }}>
            <TextInput
            placeholder='Services'
            keyboardType='default'
            />
          </View>
        </View>

        {/*Body*/}
        <ScrollView
          style ={{ backgroundColor: '#F3F4F6'}}
          contentContainerStyle={{ paddingBottom: 20
          }}
          >
        

           {/* Featured Row */} 
           {featuredCategories?.map((category) => (
            <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
            />
           ))}

          <View style={{ height: 20 }} />

          <ShopsRow
            id="1234"
            title="Service shops"
          />
        </ScrollView>

    </SafeAreaView>
  );
};

export default HomeScreen;