import { View, Text } from "react-native";
import React from "react";
import ShopCard from "./ShopCard";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";


const ShopsRow = ({ title }) => {
  return (
    <View>
      <View
        style={{
          marginTop: 4,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: 6,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 20,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>{title}</Text>
        <TouchableOpacity>
          <Text style={{ paddingLeft: 20, fontWeight: "bold" }}>See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: 4 }}
      >
        {/* ServiceCards... */}
        <ShopCard
          id={123}
          imgUrl= "https://www.sortly.com/wp-content/uploads/2022/07/Mechanic-Shop-Organization-Ideas-1.jpg"
          title="Kevin's"
          long={20}
          lat={0}
        />
        <ShopCard
          id={1234}
          imgUrl= "https://hips.hearstapps.com/hmg-prod/images/gettyimages-647333471-1586277995.jpg?crop=0.926xw:0.693xh;0.0593xw,0.153xh&resize=1200:*"
          title="Drive&Dry"
          long={20}
          lat={0}
        />
        <ShopCard
          id={12345}
          imgUrl="https://images.theconversation.com/files/76578/original/image-20150331-1231-1ttwii6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
          title="Car Cleaner"
          long={20}
          lat={0}
        />
        <ShopCard
          id={123456}
          imgUrl="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Best shop"
          long={20}
          lat={0}
        />
        <ShopCard
          id={123457}
          imgUrl="https://biz-file.com/c/2003/541240-700x420.jpg"
          title="Repairthru"
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default ShopsRow;
