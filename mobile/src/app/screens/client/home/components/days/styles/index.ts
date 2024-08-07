import { backgroundColor } from "@/app/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    day_container:{
        backgroundColor:"white",
        paddingVertical:10,
        paddingHorizontal:10,
        borderRadius: 5,
        marginRight:5
    },

    selected_day_container:{
        backgroundColor:backgroundColor,
        paddingVertical:10,
        paddingHorizontal:10,
        borderRadius: 5,
        marginRight:5
    },
    day_text:{
        fontSize: 16,
        fontWeight:"300"
    },
    selected_day_text:{
        color:"white",
        fontSize: 16
    },

    day_main_container:{
       
    },

    day_header_text:{
        marginBottom:8 
    },
    days_head_container:{
        marginVertical:15
    }
})