import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

export const HeroComponent = () => {
  return (
    <View style={styles.main_container}>

      <View style={styles.text_container}>
        <Text style={styles.head_text}>50% off deals</Text>
        <Text>Get discounts on first 3 delveries</Text>


        <TouchableOpacity style={styles.button_style}>
            <Text style={styles.button_text}>Learn More</Text>
        </TouchableOpacity>
      </View>

      <View>
            <Text>Image</Text>
      </View>
      
    </View>
  )
}

