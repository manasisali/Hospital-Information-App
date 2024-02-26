import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home';
import Appointment from '../Screens/Appointment';
import Profile from '../Screens/Profile';
import { FontAwesome } from '@expo/vector-icons';
import HomeNavigation from './HomeNavigation';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
   <Tab.Navigator 
   screenOptions={{headerShown:false,
      tabBarActiveTintColor: '#863A6F',
    }}
   >
    <Tab.Screen name='Home' component={HomeNavigation}
    options={{
      tabBarIcon:({size,color})=>(
        <FontAwesome name="home" size={size} color={color} />
      )
    }}/>
    <Tab.Screen name='Appointment' component={Appointment}
    options={{
      tabBarIcon:({size,color})=>(
        <FontAwesome name="calendar" size={size} color={color} />
      )
    }}/>
    <Tab.Screen name='Profile' component={Profile}
    options={{
      tabBarIcon:({size,color})=>(
        <FontAwesome name="user-circle-o" size={size} color={color}  />
      )
    }}/>
   </Tab.Navigator>
  )
}