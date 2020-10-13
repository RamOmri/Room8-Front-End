import React, { Component, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'

import WelcomePage from '../WelcomePage'
import Login from '../Login'
import profileOne from '../profileOne'
import usersProfile from '../usersProfile'
import BuildingStructure from '../BuildingStructure'
import HouseDynamics from '../HouseDynamics'
import HouseDynamicsCont from '../HouseDynamicsCont'
import amenities from '../amenities'

    const Tab  = createBottomTabNavigator()
    const Stack = createStackNavigator()

const mainStack = ({navigation: stackNavigation}) =>(
   
             <Stack.Navigator
            screenOptions={{
                  headerShown: false
                  }}
             >
                <Stack.Screen name = 'Login' component={Login} />
             </Stack.Navigator>
   
  )

    const registerStack = ({navigation: stackNavigation}) =>(
        <Stack.Navigator
          screenOptions = {{
            headerShown: false
          }}
        >
          <Stack.Screen name = 'profileOne' component = {profileOne}
          />
          <Stack.Screen name = 'usersProfile' component = {usersProfile} />
          <Stack.Screen name = 'BuildingStructure' component = {BuildingStructure} />
          <Stack.Screen name = 'HouseDynamics' component = {HouseDynamics} />
          <Stack.Screen name = 'HouseDynamicsCont' component = {HouseDynamicsCont} />
          <Stack.Screen name = 'amenities' component = {amenities} />
        </Stack.Navigator>
    )
   


export default () => (
   
        <NavigationContainer >
              <Stack.Navigator
                screenOptions={{
                  headerShown: false
                  }}
              >
                      <Stack.Screen name="WelcomePage" component={WelcomePage}  />
                     <Stack.Screen name = 'registerStack' component = {registerStack} /> 
                   <Stack.Screen name = 'Login' component={mainStack} />

              </Stack.Navigator>
    
          
    
        </NavigationContainer>
      
)

// const styles = StyleSheet.create({
//   tabs: {
    
//   },

// })