import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { styles } from './styles'
import MenuCard from './component/card'

const TodayMenuComponent = () => {
  return (
    <View style={styles.main_container}>
      <Text style={styles.head_text}>Friday's Menu</Text>


      <View>
        <FlatList 
            data = {[1,1,1,1,1,1,1]}
           
            
            contentContainerStyle={styles.content_container}
            renderItem={(item:any)=> <MenuCard />}
        
        />
           
      </View>
    </View>
  )
}

export default TodayMenuComponent