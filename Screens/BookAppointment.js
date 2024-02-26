import { View, Text } from 'react-native'
import React from 'react'
import PageHeader from '../Components/Common/PageHeader'
import { useRoute } from '@react-navigation/native'
import BookAppHospitalinfo from '../Components/BookAppoitment/BookAppHospitalinfo';
import BookingSection from '../Components/BookAppoitment/BookingSection';

export default function BookAppointment() {
  const param=useRoute().params;
  return (
    <View>
      <View style={{padding:20}}>
       <BookAppHospitalinfo hospital={param.hospital}/>
       <BookingSection hospital={param.hospital}/>
       </View>
    </View>
  )
}