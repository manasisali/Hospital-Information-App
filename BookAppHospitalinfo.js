import { View, Text, Image } from 'react-native'
import React from 'react'
import PageHeader from '../Common/PageHeader'
import { Entypo } from '@expo/vector-icons';
import BookingSection from './BookingSection';

export default function BookAppHospitalinfo({hospital}) {
  return (
    <View>
        <PageHeader title={'Book Appointment'}/>
        <View style={{display:'flex',flexDirection:'row',marginTop:10,gap:15,alignItems:'center'}}>
            <Image source={{uri:hospital.image.url}}
            style={{
                width:100,
                height:100,
                borderRadius:99
            }}/>
            <View>
                <Text style={{fontSize:20,marginBottom:8,fontWeight:600}}>{hospital.name}</Text>
                 <View style={{display:'flex',flexDirection:'row',gap:5,alignItems:'center',width:'80%'}}>
                    <Entypo name="location-pin" size={30} color="#863A6F" />
                        <Text style={{fontSize:15,paddingRight:23}}>{hospital.address}</Text>
                 </View>
            </View>
            </View>
            <View style={{borderBottomWidth:1,borderColor:'#a6a4a4',margin:5,marginBottom:10}}/>
        </View>
  )
}