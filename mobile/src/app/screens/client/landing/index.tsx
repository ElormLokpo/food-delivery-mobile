import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { mainButtonStyle } from "@/app/styles";
import { IProps } from "../home/types";

const ClientLandingScreen:React.FC<IProps> = ({navigation}) => {
    const handleMainButtonPress = ()=>{
        navigation.navigate("ClientHome")
    }


  return (
    <View style={styles.main_container}>
      <Image
        source={require("../../../../assets/landing.jpg")}
        style={styles.img_style}
      />
      <View style={styles.bottom_section_container}>
        <View style={styles.header_text_container}>
          <Text style={styles.header_text}>
            Our food delivery app brings your favorite dishes to you.
          </Text>
         
            <Text style={styles.header_text_sec}>
              With our user-friendly food delivery app, you wull enjoy the best
              service.
            </Text>
          
        </View>

        <View style={styles.button_view_container}>
          <TouchableOpacity style={styles.button_style} onPress={handleMainButtonPress}>
            <Text style={styles.button_text}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sec_button_style}>
            <Text style={styles.sec_button_text}>I am an admin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ClientLandingScreen;
