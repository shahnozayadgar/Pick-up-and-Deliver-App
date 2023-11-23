import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import HomeScreen from "./app/screens/HomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import SignupScreen from "./app/screens/SignupScreen";
import HomeScreen from "./app/screens/HomeScreen";
import ServiceScreen from "./app/screens/ServiceScreen";
import { store } from "./store";
import { Provider } from "react-redux";
import BasketScreen from "./app/screens/BasketScreen";
import SelectScreen from "./app/screens/SelectScreen";
import SelectCarScreen from "./app/screens/SelectCarScreen"
import PreparingOrderScreen from "./app/screens/PreparingOrderScreen";
import TrackOrderScreen from "./app/screens/TrackOrderScreen";
import IntroScreen from "./app/screens/IntroScreen";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <TailwindProvider>
        <Stack.Navigator initialRouteName='IntroScreen' screenOptions={{headerShown: false}}>
          <Stack.Screen name="IntroScreen" component={IntroScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignupScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ServiceScreen" component={ServiceScreen} />
          <Stack.Screen 
            name="BasketScreen" 
            component={BasketScreen}
            options={{presentation: "modal", headerShown: false}}
            />
          <Stack.Screen name="SelectScreen" component={SelectScreen} options={{ presentation: "fullScreenModal", headerShown: false }} />
          <Stack.Screen name="SelectCarScreen" component={SelectCarScreen} options={{ presentation: "fullScreenModal", headerShown: false }} />
          <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen} options={{ presentation: "fullScreenModal", headerShown: false }} />
          <Stack.Screen name="TrackOrderScreen" component={TrackOrderScreen} options={{ presentation: "fullScreenModal", headerShown: false }} />


          
        </Stack.Navigator>
      </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
