import { backgroundColor } from "@/app/styles"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    main_container:{
        backgroundColor:'white',
        padding:16,
        borderRadius:10,
        flexDirection:"row"
    },
    text_container:{
        flex:2
    },
    head_text:{
        fontSize: 20,
        fontWeight:'500',
        marginBottom: 4
    },
    button_style:{
        marginTop:15,
        backgroundColor: backgroundColor,
        width:100,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:8,
        borderRadius:5

    },
    button_text:{
        color:"white"
    }
})