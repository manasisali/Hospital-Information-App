import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home';
import Hospital_Doctor_List from '../Screens/Hospital_Doctor_List';
import HospitalDetail from '../Screens/HospitalDetail';
import BookAppointment from '../Screens/BookAppointment';

const Stack = createStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Hospital-Doctor-List' 
        component={Hospital_Doctor_List}/>
        <Stack.Screen name='hospital-detail' component={HospitalDetail}/>
        <Stack.Screen name='book-appointment' component={BookAppointment}/>
    </Stack.Navigator>
  )
}