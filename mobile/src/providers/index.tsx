import { View, Text } from 'react-native'
import React from 'react'
import { RouteProvider } from './route-provider'
import { Routes } from '@/routes'

const RootProvider = () => {
  return (
    <Routes />
  )
}

export default RootProvider