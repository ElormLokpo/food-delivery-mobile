import ClientHomeScreen from "@/app/screens/client/home";
import ClientLandingScreen from "@/app/screens/client/landing";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const Stack = createNativeStackNavigator();

export const RouteProvider = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ClientLanding">
        <Stack.Screen
          name="ClientLanding"
          component={ClientLandingScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ClientHome"
          component={ClientHomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
