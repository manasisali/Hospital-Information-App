import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { MaterialIcons } from '@expo/vector-icons';

export default function Header() {
  const {isLoaded,isSignedIn,user} = useUser();
  if(!isLoaded||!isSignedIn)
  {
    return null
  }
  return (
    <View 
    style={{
      display:'flex',
      justifyContent:'space-between',
      flexDirection:'row',
      alignItems:'center'
    }}>
      <View 
      style={{
        display:'flex',
        flexDirection:'row',
        gap:8,
        alignItems:'center',
      }}
      >
        <Image source={{uri:user.imageUrl}}
        style={{width:45,height:45,borderRadius:50}}/>
        <View style={{
          direction:'flex'
        }}>
          <Text>Hello,👋</Text>
          <Text style={{fontSize:18,fontWeight:'bold'}}>{user.fullName}</Text>
        </View>
      </View>
      <MaterialIcons name="notifications-none" size={30} color="black"/>
    </View>
  )
}