import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { IProps } from "./types";
import LocationFinderComponent from "./components/location-finder";
import { styles } from "./styles";
import Notifications from "./components/notifications";
import SearchComponenet from "./components/search";
import { DayContainer } from "./components/days";
import {HeroComponent} from "./components/hero"

const ClientHomeScreen: React.FC<IProps> = () => {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.main_container}>
          <View style={styles.top_container}>
            <View style={styles.greeting_text_container}>
              <Text style={styles.greeting_text}>
                Hello Kofi, <Text>Good Morning!</Text>
              </Text>
              <LocationFinderComponent />
            </View>
            <Notifications />
          </View>

          <View>
              <SearchComponenet />
          </View>

          <View>
              <DayContainer />
          </View>

          <View>
            <HeroComponent />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ClientHomeScreen;
