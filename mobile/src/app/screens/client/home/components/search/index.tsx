import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Feather";
import FilterIcon from "react-native-vector-icons/Ionicons";

const SearchComponenet = () => {
  return (
    <View style={styles.search_container}>
      <View style={styles.search_btn_container}>
        <TouchableOpacity style={styles.search_button}>
          <Icon name="search" />
          <Text style={styles.search_button_text}>Search dishes...</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.filter_btn_container}>
        <TouchableOpacity style={styles.filter_button}>
          <FilterIcon name="filter-outline" size={16}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchComponenet;
