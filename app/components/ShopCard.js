import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const ShopCard = ({ id, imgUrl, title }) => {
  return (
    <TouchableOpacity
      style={{ backgroundColor: "white", marginRight: 12, elevation: 2 }}
    >
      <Image
        source={{
          url: imgUrl,
        }}
        style={{
          height: 180,
          width: 157,
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}
      />

      <View
        style={{
          paddingHorizontal: 3,
          paddingBottom: 15,
          paddingTop: 15,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20, paddingBottom: 6 }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ShopCard;
