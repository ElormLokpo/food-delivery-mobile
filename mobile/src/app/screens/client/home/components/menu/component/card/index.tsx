import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { IProps } from './types';
import { useNavigation } from '@react-navigation/native';

const MenuCard:React.FC<IProps> = () => {
    const navigation = useNavigation();

    const handlePressMenu = ()=>{
        
    }

  return (
    <TouchableOpacity style={styles.card_container} onPress={handlePressMenu}>
        <View>
            <Image source = {require("../../../../../../../../assets/food.jpg")} style={styles.img_style}/>
        </View>

     <View style = {styles.text_container}>
        <Text style = {styles.head_text}>Assorted Fried Rice</Text>
        <Text style = {styles.desc_text}>Rice + Chicken + Sauce</Text>

        <View style={styles.price_container}>
            <Text style={styles.price_text}>GHC 34.00</Text>
            <Text style={styles.rating_text}>4.5 rating</Text>

        </View>

     </View>
    
    </TouchableOpacity>
  )
}

export default MenuCard