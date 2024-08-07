import { mainButtonStyle, secondaryButtonStyle } from "@/app/styles";
import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';


export const styles = StyleSheet.create({

   main_container:{
    flex:1,
    
   },
   button_view_container:{
    paddingVertical:10,
    paddingHorizontal: 10,
    flexDirection:"row",
    gap:10
   },
    
   img_style:{
        backgroundColor:"#4bb470",
        height:500, 
        width: Dimensions.get("window").width
   },
   button_style:{
    backgroundColor:"#1b1b1a",
    paddingVertical: 20,
    borderRadius: 6,
    flex:2,
    alignItems:"center",
    justifyContent:"center"
   },
   button_text:{
    color: "white"
   },
   sec_button_style: {
    borderWidth:2, 
    borderColor:"#e9e9e9",
    paddingVertical: 20,
    paddingHorizontal:10,
    borderRadius: 6,
    alignItems:"center",
    justifyContent:"center"
   },
   sec_button_text:{
    color:"#e9e9e9",
    fontWeight:"600"
   },
   
   header_text_container:{
     paddingVertical: 10,
     paddingLeft:10,
    
     marginBottom:30
   },
   header_text:{
    fontSize:40,
    paddingRight:30,
    fontWeight:"500",
    marginBottom: 10,
    color:"#f1f2f1"
   },

   header_text_sec:{
    fontSize:22,
    lineHeight:40,
    color:"#c9f4e8",

   },

   bottom_section_container:{
    backgroundColor:'#4bb470',
    flex:1,
    justifyContent: "flex-end",
    paddingVertical: 40,
    paddingHorizontal:10,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    
   },
   
   
   
})