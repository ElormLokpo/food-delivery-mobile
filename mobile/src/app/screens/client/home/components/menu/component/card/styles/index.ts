import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card_container:{
        backgroundColor:"white",
        width: "100%",
        borderRadius: 5, 
        marginBottom:10
        
    },
    text_container:{
        padding:10
    },
    head_text:{
        fontSize:20,
        marginBottom:2
    },
    desc_text:{
        color:"#626162"
    },
    price_text:{
        fontWeight:"700"
    },
    price_container:{
        marginTop:17,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    rating_text:{

    },
    img_style:{
        height:150,
        width:"100%",
        borderTopLeftRadius:5,
        borderTopRightRadius:5,

    }
})