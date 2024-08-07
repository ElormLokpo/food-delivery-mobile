import { View, Text } from 'react-native'
import React from 'react'
import { Routes } from '@/routes';
import { NavigationContext } from '@/context/route-context';
import { IProps } from './types';

export const RouteProvider:React.FC<IProps> = ({children}) => {
    const navigation:any = {};
  return (
    <NavigationContext.Provider value={{navigate: navigation.navigate}}>
         {children}
    </NavigationContext.Provider>
  )
}

