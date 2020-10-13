import React, { Component, useEffect } from 'react'
import { Platform } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import Navigator from './src/navigation/Navigator'
import { MenuProvider } from 'react-native-popup-menu';

export default function App() {
  
  useEffect(() =>{
    SplashScreen.hide()
  })
  
  return (
<MenuProvider >
  <Navigator />
</MenuProvider>
  )
}