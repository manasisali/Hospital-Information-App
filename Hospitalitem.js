import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Hospitalitem({hospital}) {
  return (
    <View style={{width:200,borderRadius:10,borderWidth:1,borderColor:'#a4a2a4',marginRight:10,marginTop:10,display:'flex'}}>
      <Image source={{uri:hospital?.image?.url}} 
      style={{width:'100%',height:110,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
      <View style={{padding:7}}>
        <Text style={{fontSize:16,fontWeight:'700'}}>{hospital.name}</Text>
        <Text style={{fontSize:14,color:'#a6a4a4'}}>{hospital.address}</Text>
      </View>
    </View>
  )
}