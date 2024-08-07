import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";

const LocationFinderComponent = () => {
  return (
    <View>
     
      <TouchableOpacity style={styles.container_style}>
        
        <Text style={styles.location_text}>Patrice, Lumumba Street</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LocationFinderComponent;

