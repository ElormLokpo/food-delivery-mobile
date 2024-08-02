import { StyleSheet,Dimensions } from "react-native";

export const styles = StyleSheet.create({
    search_container:{
        marginVertical:10,
        flexDirection:"row",
        gap:5
        
    },
    search_button:{
      backgroundColor:"white",
      borderRadius:5,
      paddingHorizontal:10,
      paddingVertical:10,
      flexDirection:"row",
      alignItems:"center",
      
      gap:5
    },
    search_button_text:{
        fontSize:20,
        color:"#5f5f60"

    },
    filter_button:{
        backgroundColor:"white",
        paddingHorizontal:10,
        paddingVertical:12,
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center"
    },

    filter_btn_container:{
        flex:1
    },  

    search_btn_container:{
        flex:8
    }

})