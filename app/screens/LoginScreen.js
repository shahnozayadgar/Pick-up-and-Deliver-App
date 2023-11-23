import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation =  useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="light" />

      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          paddingTop: 40,
          paddingBottom: 10,
        }}
      >
        <View style={{ alignItems: "center", marginBottom: 40, marginTop: 107 }}>
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 30, marginRight: 150, marginBottom: 10 }}>
            Let's get started     
          </Text>
          <Text style={{ color: "black", fontWeight: "regular", fontSize: 16, marginRight: 260  }}>
            Let's get started     
          </Text>
        </View>

        <View style={{ flex: 1, alignItems: 'center', marginHorizontal: 4, marginVertical: 4, marginLeft: 20, marginRight: 20 }}>
          <View style={{ backgroundColor: 'white', borderColor: 'gray', borderWidth: 1, padding: 13, borderRadius: 10, width: '100%', marginBottom: 20 }}>
            <TextInput placeholder='Email' placeholderTextColor={'gray'} />
          </View>



          <View style={{ backgroundColor: 'white', borderColor: 'gray', borderWidth: 1, padding: 13, borderRadius: 10, width: '100%', marginBottom: 35 }}>
            <TextInput placeholder="Password" placeholderTextColor="gray" secureTextEntry={true} />
          </View>


          <View style={{ width: '100%' }}>
            <TouchableOpacity style={{ width: '100%', backgroundColor: '#54A6FF', padding: 13, borderRadius: 10, marginBottom: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
              Login
              </Text>
            </TouchableOpacity>
          </View>


          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text>Don't have an account? </Text>
              <TouchableOpacity onPress={()=> navigation.push('SignUp')}>
                <Text style={{ color: '#54A6FF' }}>SignUp</Text>
              </TouchableOpacity>
          </View>


        </View>
      </View>
    </View>
  );
}
