import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import ServiceCard from './ServiceCard';
import { useEffect } from "react";
import { client } from '../../sanity';

const FeaturedRow = ({id, title, description}) => {

  const [service, setServices] = React.useState([]);
  useEffect(() => {
    client
      .fetch(
        `
*[_type == "featured" && _id==$id]{
        ...,
        service[]->{
          ...,
          services[]->,
            type->{
              name
            }
          },
        }[0]
        `,
        { id }
      )
      .then((data) => {
        setServices(data?.service);

      });
  }, []);




  return (
    <View>
      <View style={{ marginTop: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 6, paddingLeft: 20, paddingRight: 20, paddingTop: 20  }}>
        <Text style={{fontWeight: 'bold', fontSize: 20 }}>{title}</Text>
        <TouchableOpacity>
        <Text style ={{paddingLeft: 20, fontWeight: 'bold' }}>See all</Text>
        </TouchableOpacity>
      </View>
      <Text style={{fontSize: 12, color: '#808080', paddingBottom: 10, paddingLeft: 20 }}>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal: 20,
        }}
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: 4 }}
      >

      {service?.map((service) => (
          <ServiceCard
            key={service._id}
            id={service.id}
            imgUrl={service.image}
            title={service.name}
            services={service.services}
            rating={service.rating}
            short_description={service.short_description}
            long_description={service.long_description}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow