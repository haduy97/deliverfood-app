import "react-native-url-polyfill/auto";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import HomeScreen from "./App/screens/Home";
import RestaurantScreen from "./App/screens/Restaurant";
import BasketScreen from "./App/screens/Basket";
import PreparingScreen from "./App/screens/Preparing";
import DeliveringScreen from "./App/screens/Delivering";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Restaurant"
            component={RestaurantScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Basket"
            component={BasketScreen}
            options={{ headerShown: false, presentation: "modal" }}
          />
          <Stack.Screen
            name="Preparing"
            component={PreparingScreen}
            options={{ headerShown: false, presentation: "fullScreenModal" }}
          />
          <Stack.Screen
            name="Delivering"
            component={DeliveringScreen}
            options={{ headerShown: false, presentation: "fullScreenModal" }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
