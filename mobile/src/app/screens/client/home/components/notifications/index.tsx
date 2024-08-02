import { TouchableOpacity } from 'react-native'
import React from 'react';
import Icon from "react-native-vector-icons/Ionicons"
import { styles } from './styles';

const Notifications = () => {
  return (
    <TouchableOpacity style={styles.notification_container}>
        <Icon name="notifications-outline" size={20} />
    </TouchableOpacity>
  )
}

export default Notifications