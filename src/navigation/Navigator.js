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
import HouseDynamicsRoom8 from '../HouseDynamicsRoom8'
import amenities from '../amenities'
import main from '../main'
import profile from '../Profile'
import chat from '../Chat'

    const Tab  = createBottomTabNavigator()
    const Stack = createStackNavigator()

const mainTab = ({navigation: stackNavigation}) =>(
   
             <Tab.Navigator
            screenOptions={{
                  headerShown: false
                  }}
                  tabBarOptions={{
                    activeTintColor: 'blue',
                    inactiveTintColor: 'gray',
                    size: '200',
                  }}
             >
                 <Tab.Screen name = 'Profile' component = {profile} />
                <Tab.Screen name = 'Find a ROOM8' component = {main} />
                <Tab.Screen name = 'Chat' component = {chat} />
               
             </Tab.Navigator>
   
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
          <Stack.Screen name = 'HouseDynamicsRoom8' component = {HouseDynamicsRoom8} />
          <Stack.Screen name = 'amenities' component = {amenities} />
          <Stack.Screen name = 'Find a ROOM8' component = {mainTab} />
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
                   <Stack.Screen name = 'Login' component={Login} />
                   <Stack.Screen name = 'mainTab' component = {mainTab} />

              </Stack.Navigator>
    
          
    
        </NavigationContainer>
      
)

// const styles = StyleSheet.create({
//   tabs: {
     
//   },

// })