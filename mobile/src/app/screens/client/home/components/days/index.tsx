import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import { IDayComponentProps } from "./types";

export const DayComponent: React.FC<IDayComponentProps> = (props) => {
  return (
    <TouchableOpacity style={props.isSelected ? styles.selected_day_container :styles.day_container}>
      <Text style={props.isSelected? styles.selected_day_text : styles.day_text}>
        {props.textData ? props.textData : "M"}
      </Text>
    </TouchableOpacity>
  );
};

export const DayContainer = () => {
  return (
    <View style={styles.days_head_container}>
      <Text style={styles.day_header_text}>Days:</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.day_main_container}>
        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((i: any, index: any) => (
          index == 4 ?     
          <DayComponent key={index} textData={i} isSelected={true} />:
          <DayComponent key={index} textData={i} />
        ))}
      </ScrollView>
    </View>
  );
};
