import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import PageHeader from '../Components/Common/PageHeader'

export default function Appointment() {
  
  return (
    <View style={{padding:20}}>
      <PageHeader title={'My Appointment'} backbutton={false}/>
      
    </View>
  )
}
